import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  DeptParams,
  RolePageParams,
  RoleListItem,
  MenuListItem,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/user/list',
  DeptSave = '/dept/save',
  DeptDelete = '/dept/delete',
  DeptList = '/dept/findDeptTree',
  PermissionList = '/permission/list',
  PermissionSave = '/permission/save',
  PermissionDel = '/permission/delete',
  MenuList = '/menu/admin/list',
  MenuSave = '/menu/save',
  RoleList = '/role/list',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const saveDept = (params?: DeptParams) =>
  defHttp.post<String[]>({ url: Api.DeptSave, params });

export const deleteDept = (id?: string) =>
  defHttp.post<String[]>({ url: Api.DeptDelete, params: { id: id } });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const savePermission = (params?: DeptParams) =>
  defHttp.post<String[]>({ url: Api.PermissionSave, params });

export const deletePermission = (id?: string) =>
  defHttp.post<String[]>({ url: Api.PermissionDel, params: { id: id } });

export const findPermissionList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.PermissionList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListItem>({ url: Api.MenuList, params });

export const saveMenu = (params?: MenuParams) =>
  defHttp.post<MenuListItem>({ url: Api.MenuSave, params });

export const findRoleList = (params?: RolePageParams) =>
  defHttp.get<RoleListItem>({ url: Api.RoleList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });
