import { defaultRequest } from '@/service'

export function getData(params?: any) {
  console.log(123)
  return defaultRequest.request({
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
}
