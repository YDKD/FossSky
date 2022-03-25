/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-25 10:12:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-25 10:22:59
 */
import { ReutrnDataType } from '../../api/type'
export const useDelete = async (
  interfaceApi: (params?: any) => Promise<ReutrnDataType>,
  id: number | string
): Promise<boolean> => {
  let flag = false
  const { code } = await interfaceApi(id)
  if (code == 200) {
    flag = true
  }

  return flag
}
