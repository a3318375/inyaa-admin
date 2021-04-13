import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AccountParams = BasicPageParams & {
  account?: string;
  password?: string;
  nickname?: string;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type MenuParams = {
  id?: number;
  pid?: number;
  name?: string;
  enable?: number;
  permission?: string;
  component?: string;
  path?: string;
  icon?: string;
  type?: number;
  sort?: number;
};

export interface AccountListItem {
  id: string;
  username: string;
  email: string;
  name: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface DeptParams {
  id: number;
  name: string;
  parentId: number;
  sort: number;
  enable: boolean;
  remark: string;
}
export interface DeptListItem {
  id: string;
  orderNo: string;
  createTime: string;
  remark: string;
  status: number;
}

export interface MenuListItem {
  id: string;
  type: number;
  sort: number;
  name: number;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export interface RoleListItem {
  id: string;
  roleName: string;
  roleKey: string;
  remark: string;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
