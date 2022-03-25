/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-21 11:35:02
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-25 09:46:35
 */
import { ElMessage } from 'element-plus'
type TipsType = 'success' | 'warning' | 'info' | 'error'
type ElMessageType = {
  msg: string
  type?: TipsType
  duration?: number
  closeable?: boolean
}

export const useMessage = ({
  msg,
  type = 'success',
  duration = 2000,
  closeable = false
}: ElMessageType) => {
  ElMessage[type]({ duration: duration, message: msg, showClose: closeable })
}
