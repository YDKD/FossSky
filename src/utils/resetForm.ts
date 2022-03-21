/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-21 10:36:09
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-21 11:04:02
 */
import type { FormInstance } from 'element-plus'

export default function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
}
