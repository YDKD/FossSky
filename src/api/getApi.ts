import { defaultRequest } from '@/service'
import { ReutrnDataType } from './type'

export function getData(params?: any) {
  return defaultRequest
    .request<ReutrnDataType>({
      url: '/home/multidata',
      method: 'GET',
      params,
      interceptors: {
        requestInterceptor: (req) => {
          // console.log('单个请求拦截')
          return req
        },
        reponseInterceptor: (res) => {
          // console.log('单个响应拦截')
          return res
        }
      }
    })
    .then((res) => {
      return res
    })
}

export function checkExitInfo(params: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/exit',
    method: 'GET',
    params
  })
}
