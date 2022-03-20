import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { FossRequestConfig, FossRequestInterceptor } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

import { DEFAULT_REQUEST_LOADING } from '@/global'

class FossRequest {
  requestInstance: AxiosInstance
  interceptors?: FossRequestInterceptor
  requestLoading?: LoadingInstance
  showRequestLoading: boolean

  constructor(config: FossRequestConfig) {
    this.requestInstance = axios.create(config)
    this.interceptors = config.interceptors
    this.showRequestLoading =
      config.showRequestLoading ?? DEFAULT_REQUEST_LOADING

    // add global instance interceptor
    this.requestInstance.interceptors.request.use(
      (req) => {
        // console.log('全局实例的请求拦截')

        if (this.showRequestLoading) {
          this.requestLoading = ElLoading.service({
            lock: true,
            text: '数据请求中~',
            background: 'rgba(0, 0, 0, 0.6)'
          })
        }

        return req
      },
      (error) => {
        // console.log('请求失败')
      }
    )
    this.requestInstance.interceptors.response.use(
      (res) => {
        // console.log('全局实例的响应拦截')

        // remove requestLoading
        this.requestLoading?.close()

        const data = res.data,
          returnCode = data.returnCode
        if (returnCode != '-10001') {
          return res.data
        } else {
          // Error Message Tips
          console.log('Elemessage错误')
        }
      },
      (error) => {
        // remove request loading
        this.requestLoading?.close()

        const errorCode = error.response.status
        // use Router to handle
        switch (errorCode) {
          case 404:
            console.log('404错误')
            break
          case 500:
            console.log('服务内部错误')
            break
          default:
            break
        }
      }
    )

    // add request instance interceptor
    this.requestInstance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.requestInstance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )
  }

  request<T>(config: FossRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // single request interceptor
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // handle request loading
      if (config.showRequestLoading == false) {
        this.showRequestLoading = false
      }

      this.requestInstance
        .request<any, T>(config)
        .then((res) => {
          // single reponse interceptor
          if (config.interceptors?.reponseInterceptor) {
            res = config.interceptors.reponseInterceptor(res)
          }

          resolve(res)
        })
        .catch((error) => {
          reject(error)
          // console.log(error)
        })
        .finally(() => {
          // initial request loading
          this.showRequestLoading = DEFAULT_REQUEST_LOADING
        })
    })
  }
}

export default FossRequest
