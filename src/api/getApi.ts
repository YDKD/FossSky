import { defaultRequest } from '@/service'

interface ReutrnDataType {
  data: any
  returnCode: string
  success: boolean
}

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
