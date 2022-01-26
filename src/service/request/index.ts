import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class FossRequest {
  requestInstance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.requestInstance = axios.create(config)
  }

  request(config: AxiosRequestConfig): any {
    this.requestInstance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default FossRequest
