import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { findTagList, findTypeList } from '/@/api/post/article';
import { uploadCover } from '/@/api/sys/upload';
import { MarkDown } from '/@/components/Markdown';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '文章标题',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '摘要',
    dataIndex: 'summary',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 2;
      const color = enable ? 'green' : 'red';
      const text = enable ? '发布' : '草稿';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '文章标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    required: true,
    component: 'Input',
  },
  {
    field: 'summary',
    label: '摘要',
    component: 'InputTextArea',
  },
  {
    field: 'typeId',
    label: '分类id',
    component: 'ApiSelect',

    componentProps: {
      api: findTypeList,
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'tagId',
    label: '标签id',
    component: 'ApiSelect',

    componentProps: {
      api: findTagList,
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 2,
    componentProps: {
      options: [
        { label: '草稿', value: 1 },
        { label: '发布', value: 2 },
      ],
    },
  },
  {
    field: 'cover',
    label: '封面',
    component: 'Upload',
    rules: [{ required: true, message: '请选择上传文件' }],
    componentProps: {
      api: uploadCover,
      maxNumber: 1,
    },
  },
  {
    label: '文章',
    field: 'context',
    component: 'Input',
    defaultValue: 'defaultValue',
    rules: [{ required: true, trigger: 'blur' }],
    render: ({ model, field }) => {
      return h(MarkDown, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
];
