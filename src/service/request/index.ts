import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { FossRequestConfig, FossRequestInterceptor } from './type'
class FossRequest {
  requestInstance: AxiosInstance
  interceptor?: FossRequestInterceptor

  constructor(config: FossRequestConfig) {
    this.requestInstance = axios.create(config)
    this.interceptor = config.interceptors

    this.requestInstance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    this.requestInstance.interceptors.response.use(
      this.interceptor?.reponseInterceptor,
      this.interceptor?.reponseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): any {
    this.requestInstance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default FossRequest
