/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-12 10:27:55
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 15:52:23
 */
import { getWorkerSalary } from '@/api/getApi'
import { updateWorkerSalary } from '@/api/postApi'
import { useMessage } from '@/hooks'
import { FormInstance } from 'element-plus'
import { computed, ref } from 'vue'

import type { SalaryForm } from '../types'

const searchName = ref()

const queried = ref(false)

const salaryFormRef = ref<FormInstance>()

const step = 20

const salaryForm = ref<SalaryForm>({
  id: '',
  serialNumber: '',
  base_pay: 0,
  allowance: 0,
  performance_pay: 0,
  tax: 0,
  workerName: ''
})

const real_pay = computed(() => {
  const { base_pay, allowance, performance_pay, tax } = salaryForm.value
  return base_pay + performance_pay + allowance - tax
})

const getInitData = async () => {
  if (searchName.value == '') return
  const params = {
    username: searchName.value
  }
  const { data, code } = await getWorkerSalary(params)
  if (code == 200) {
    const result: Array<SalaryForm> | undefined = await data.result
    if (result && result.length > 0) {
      salaryForm.value = result[0]
      queried.value = true
    } else {
      useMessage({ msg: '未查询到该职工信息', type: 'error' })
      queried.value = false
    }
  }
}

const submit = async () => {
  const { code, msg } = await updateWorkerSalary(salaryForm.value)
  useMessage({ msg: msg, type: code == 200 ? 'success' : 'error' })
}

export {
  searchName,
  getInitData,
  queried,
  salaryForm,
  salaryFormRef,
  submit,
  real_pay,
  step
}
