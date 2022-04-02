/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 16:00:19
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-01 17:38:22
 */

import { getPerson } from '@/api/getApi'
import { useMessage } from '@/hooks'
import type { FormInstance } from 'element-plus'

import { ref } from 'vue'

const formInstanceRef = ref<FormInstance>()

const formData = ref<Person>({
  // 身份证号
  IDcard: '',
  // 年龄
  age: 0,
  // 人员创建时间
  createTime: '',
  // 部门
  department: '',
  // 职位
  duty: '',
  // 性别
  gender: 0,
  // 家庭住址
  homeAddress: '',
  // id,
  id: 0,
  // 姓名
  name: '',
  // 民族
  nation: '',
  // 籍贯,
  nativePlace: '',
  // 手机号
  phoneNumber: '',
  // 员工编号
  serialNumber: '',
  // 人员信息更新时间
  updateTime: '',
  // 当前状态
  workStatus: 0,
  // 入职时间
  workTime: ''
})
const getInitData = async (props: any) => {
  if (props.type == 'edit') {
    const params = {
      name: props.queryInfoName
    }
    const { data } = await getPerson(params)
    if (data.code !== 200) {
      useMessage({
        type: 'error',
        msg: '数据获取失败'
      })
    } else {
      formData.value = data.result
      console.log(formData)
    }
  }
}

export { formData, getInitData, formInstanceRef }
