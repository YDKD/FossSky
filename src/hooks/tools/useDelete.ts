/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-25 10:12:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-25 13:52:58
 */
import { ReutrnDataType } from '../../api/type'
import { ElMessageBox } from 'element-plus'

export const useDelete = async (
  interfaceApi: (params?: any) => Promise<ReutrnDataType>,
  id: number | string
): Promise<boolean> => {
  let result = ''
  let flag = false
  result = await ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  )
  if (result != '') {
    const { code } = await interfaceApi(id)
    if (code == 200) {
      flag = true
    }
  }
  return flag
}
