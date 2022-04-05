/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-05 14:03:31
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 14:03:32
 */

import { defaultRequest } from '@/service'
import { ReutrnDataType } from './type'

export function deletePersonInfo(params: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/sys/person',
    method: 'DELETE',
    params
  })
}
