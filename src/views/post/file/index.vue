<template>
  <PageWrapper :class="prefixCls" title="卡片列表">
    <template #headerContent>
      <BasicUpload
        :maxSize="20"
        :maxNumber="10"
        @change="handleChange"
        :api="uploadApi"
        class="my-5"
      />
    </template>

    <div :class="`${prefixCls}__content`">
      <a-list>
        <a-row :gutter="16">
          <template v-for="(item, index) in list" :key="index">
            <a-col :span="6">
              <a-list-item>
                <a-card :hoverable="true" :class="`${prefixCls}__card`">
                  <div :class="`${prefixCls}__card-title`">
                    <Icon class="icon" v-if="item.icon" :icon="item.icon" :color="item.color" />
                    {{ item.url }}
                  </div>
                  <div :class="`${prefixCls}__card-detail`">
                    基于Vue Next, TypeScript, Ant Design Vue实现的一套完整的企业级后台管理系统
                  </div>
                </a-card>
              </a-list-item>
            </a-col>
          </template>
        </a-row>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { FormSchema, useForm } from '/@/components/Form/index';
  import Icon from '/@/components/Icon/index';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, List } from 'ant-design-vue';
  import { uploadApi, findImgList } from '/@/api/sys/upload';

  const schemas: FormSchema[] = [
    {
      field: 'file',
      component: 'Upload',
      label: '字段1',
      colProps: {
        span: 8,
      },
      rules: [{ required: true, message: '请选择上传文件' }],
      componentProps: {
        api: uploadApi,
      },
    },
  ];
  export default defineComponent({
    name: 'FileManagement',
    components: {
      BasicUpload,
      Icon,
      PageWrapper,
      [Card.name]: Card,
      [List.name]: List,
      [List.Item.url]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const { createMessage } = useMessage();
      const [register] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 16,
        },
      });
      return {
        prefixCls: 'list-card',
        list: findImgList,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
        uploadApi,
        register,
      };
    },
  });
</script>
<style lang="less" scoped>
  .list-card {
    &__link {
      margin-top: 10px;
      font-size: 14px;

      a {
        margin-right: 30px;
      }

      span {
        margin-left: 5px;
      }
    }

    &__card {
      width: 100%;
      margin-bottom: -8px;

      .ant-card-body {
        padding: 16px;
      }

      &-title {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);

        .icon {
          margin-top: -5px;
          margin-right: 10px;
          font-size: 38px !important;
        }
      }

      &-detail {
        padding-top: 10px;
        padding-left: 30px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
