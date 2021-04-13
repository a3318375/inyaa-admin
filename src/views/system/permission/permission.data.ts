import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '接口名称',
    dataIndex: 'name',
    width: 160,
    align: 'left',
  },
  {
    title: '接口地址',
    dataIndex: 'url',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '接口名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'enable',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '停用', value: false },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '接口地址',
    component: 'Input',
    required: true,
  },
  {
    field: 'url',
    label: '接口地址',
    component: 'Input',
    required: true,
  },
];
