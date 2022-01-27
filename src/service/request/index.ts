import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { FossRequestConfig, FossRequestInterceptor } from './type'
class FossRequest {
  requestInstance: AxiosInstance
  interceptor?: FossRequestInterceptor

  constructor(config: FossRequestConfig) {
    this.requestInstance = axios.create(config)
    this.interceptor = config.interceptors

    // add instance interceptor
    this.requestInstance.interceptors.request.use(
      (req) => {
        // console.log('全局实例的请求拦截')
        return req
      },
      (error) => {
        // console.log('请求失败')
      }
    )
    this.requestInstance.interceptors.response.use(
      (res) => {
        // console.log('全局实例的响应拦截')
        return res
      },
      (error) => {
        // console.log('响应失败')
      }
    )

    this.requestInstance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    this.requestInstance.interceptors.response.use(
      this.interceptor?.reponseInterceptor,
      this.interceptor?.reponseInterceptorCatch
    )
  }

  request(config: FossRequestConfig): any {
    // single request interceptor
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.requestInstance.request(config).then((res) => {
      // single reponse interceptor
      if (config.interceptors?.reponseInterceptor) {
        config = config.interceptors.reponseInterceptor(res)
      }

      console.log(res)
    })
  }
}

export default FossRequest
