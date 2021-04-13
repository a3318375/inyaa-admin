<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :replaceFields="{ title: 'menuName', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './article.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getPostById, postSave, findTagList } from '/@/api/post/article';

  export default defineComponent({
    name: 'ArticleDrawer',
    components: { BasicDrawer, BasicForm, BasicTree },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      let id;
      const treeData = ref<TreeItem[]>([]);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 90,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          id = data.record.id;
          console.log(id);
          const postInfo = await getPostById(id);
          console.log(postInfo);

          setFieldsValue({
            ...postInfo,
          });
        }
        const tagList = await findTagList();
        updateSchema({
          field: 'tagId',
          componentProps: { tagList },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增文章' : '编辑文章'));

      async function handleSubmit() {
        try {
          let values = await validate();
          values.cover = values.cover[0];
          setDrawerProps({ confirmLoading: true });
          if (id) {
            values.id = id;
          }
          // TODO custom api
          await postSave(values);
          console.log(values);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
        treeData,
      };
    },
  });
</script>
