import { defaultRequest } from '@/service'

export function getData(params?: any) {
  console.log(123)
  return defaultRequest.request({
    url: '/home/multidata',
    method: 'GET',
    params
  })
}
