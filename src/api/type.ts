interface BaseReturnType {
  code: number
  msg: string
  token: string
}

export interface ReutrnDataType extends BaseReturnType {
  data: any
  returnCode: string
  success: boolean
}
