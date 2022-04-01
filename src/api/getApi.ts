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

export function checkExistInfo(params: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/exist',
    method: 'GET',
    params
  })
}

export function getUser(account: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: `/user/info/${account}`,
    method: 'GET'
  })
}

export function getRoutes() {
  return defaultRequest.request<ReutrnDataType>({
    url: '/user/routes',
    method: 'GET'
  })
}

export function getPersonList() {
  return defaultRequest.request<ReutrnDataType>({
    url: '/sys/person/list',
    method: 'GET'
  })
}

export function getPerson(params: any) {
  return defaultRequest.request<ReutrnDataType>({
    url: '/sys/person',
    method: 'GET',
    params
  })
}
