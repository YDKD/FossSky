import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求拦截拓展拦截器
export interface FossRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  reponseInterceptor?: (res: AxiosResponse) => AxiosResponse
  reponseInterceptorCatch?: (error: any) => any
}

// 请求拦截拓展
export interface FossRequestConfig extends AxiosRequestConfig {
  interceptors?: FossRequestInterceptor
}
