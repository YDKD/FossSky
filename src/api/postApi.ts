/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-19 18:42:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 15:21:44
 */
import { defaultRequest } from '@/service'
import { ReutrnDataType } from './type'

export function sendEmailCode(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/email/code',
    method: 'POST',
    data
  })
}

export function register(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/register',
    method: 'POST',
    data
  })
}

export function resetPass(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/forgot_psw',
    method: 'POST',
    data
  })
}

export function login(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function updatePersonInfo(userId: number, data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: `/sys/person/${userId}`,
    method: 'PUT',
    data
  })
}

export function addPersonInfo(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/sys/person',
    method: 'POST',
    data
  })
}

export function updateWorkerSalary(data: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/sys/person/salary',
    method: 'POST',
    data
  })
}
