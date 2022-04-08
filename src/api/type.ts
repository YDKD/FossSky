interface BaseReturnType {
  code: number
  msg: string
  token: string
}

interface dataStructure {
  result?: any
  code: number
  total: number
}

export interface ReutrnDataType extends BaseReturnType {
  data: dataStructure
  returnCode: string
  success: boolean
}
