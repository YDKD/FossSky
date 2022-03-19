/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-19 18:42:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-19 19:47:04
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
