import FossRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

// 可能这里会有不同的选项配置，会导出不同的请求实例
const defaultRequest = new FossRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export { defaultRequest }
