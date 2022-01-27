import FossRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

// 可能这里会有不同的选项配置，会导出不同的请求实例
const defaultRequest = new FossRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截')
      return config
    },
    requestInterceptorCatch: (config) => {
      console.log('请求错误')
      return config
    },
    reponseInterceptor: (config) => {
      console.log('响应拦截')
      return config
    },
    reponseInterceptorCatch: (config) => {
      console.log('响应错误')
      return config
    }
  }
})

export { defaultRequest }
