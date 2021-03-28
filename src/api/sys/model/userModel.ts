/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  username: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  username: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 介绍
  desc?: string;
}
