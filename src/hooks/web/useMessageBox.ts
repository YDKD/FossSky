import { ElMessageBox } from 'element-plus'
import { useMessage } from './useMessage'

/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-05 14:12:33
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 15:33:34
 */
type ElMessageBoxType = {
  tips: string
  needTips?: boolean
  deleteMsg?: string
  cacenlMsg?: string
  confirmButtonText?: string
  cancelButtonText?: string
}
export const useMessageBox = ({
  tips,
  needTips = true,
  deleteMsg = '删除成功',
  cacenlMsg = '用户取消操作',
  confirmButtonText = '确定',
  cancelButtonText = '取消'
}: ElMessageBoxType): Promise<Boolean> => {
  return ElMessageBox.confirm(tips, '警告', {
    confirmButtonText,
    cancelButtonText,
    type: 'warning'
  })
    .then(() => {
      if (needTips) {
        useMessage({ msg: deleteMsg })
      }
      return true
    })
    .catch(() => {
      if (needTips) {
        useMessage({ msg: cacenlMsg, type: 'info' })
      }
      return false
    })
}
