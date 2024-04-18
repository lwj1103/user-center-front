// @ts-ignore
/* eslint-disable */

import {request} from "@umijs/max"
/** 获取当前的用户 GET /login/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户接口 POST /api/user/search */
export async function search( options?: { [key: string]: any }) {
  console.log("search")
  return request<API.CurrentUser[]>('/user/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**
 * 删除用户接口 post /api/user/delete
 * @param options
 */
export async function deleteUser(body: API.DeleteParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 删除用户接口 post /api/user/update
 * @param options
 */
export async function updateUser(body: API.CurrentUser, options?: { [key: string]: any }) {
  return request<API.BaseResponse<boolean>>('/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}









