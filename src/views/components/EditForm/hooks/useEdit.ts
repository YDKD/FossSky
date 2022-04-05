/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 16:00:19
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 16:10:18
 */

import { getPerson, getSerialNum } from '@/api/getApi'
import { addPersonInfo, updatePersonInfo } from '@/api/postApi'
import { useMessage, useTips } from '@/hooks'
import type { FormInstance } from 'element-plus'

import { ref } from 'vue'

const formInstanceRef = ref<FormInstance>()

const formData = ref<Person>({
  // 身份证号
  IDcard: '',
  // 年龄
  age: '',
  // 人员创建时间
  createTime: '',
  // 部门
  department: '',
  // 职位
  duty: '',
  // 性别
  gender: '',
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
  workStatus: '',
  // 入职时间
  workTime: ''
})

const FormRules = reactive({
  name: [
    {
      required: true,
      message: '请输入职工姓名',
      trigger: 'blur'
    }
  ],
  age: [
    {
      required: true,
      message: '请输入职工年龄',
      trigger: 'blur'
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择职工性别',
      trigger: 'blur'
    }
  ],
  nation: [
    {
      required: true,
      message: '请输入职工民族',
      trigger: 'blur'
    }
  ],
  nativePlace: [
    {
      required: true,
      message: '请输入职工籍贯',
      trigger: 'blur'
    }
  ],
  phoneNumber: [
    {
      required: true,
      message: '请输入职工联系电话',
      trigger: 'blur'
    }
  ],
  IDcard: [
    {
      required: true,
      message: '请输入职工身份证号',
      trigger: 'blur'
    }
  ],
  homeAddress: [
    {
      required: true,
      message: '请输入职工家庭住址',
      trigger: 'blur'
    }
  ],
  serialNumber: [
    {
      required: true,
      message: '请输入职工编号',
      trigger: 'blur'
    }
  ],
  workStatus: [
    {
      required: true,
      message: '请选择职工工作状态',
      trigger: 'blur'
    }
  ],
  createTime: [
    {
      required: true,
      message: '请选择职工加入时间',
      trigger: 'blur'
    }
  ],
  workTime: [
    {
      required: true,
      message: '请选择职工首次工作时间',
      trigger: 'blur'
    }
  ],
  updateTime: [
    {
      required: true,
      message: '请选择职工信息更新时间',
      trigger: 'blur'
    }
  ]
})

const genderOptions = [
  {
    label: '男',
    value: 0
  },
  {
    label: '女',
    value: 1
  }
]

const departMentOptions = ['研发部', '数据组']

const workStatusOptions = [
  {
    label: '在职',
    value: 1
  },
  {
    label: '离职',
    value: -1
  }
]

const handleInitData = async (props: any) => {
  if (props.type == 'edit') {
    getInitData(props.queryInfoName, props.type)
  } else if (props.type == 'add') {
    formData.value.workStatus = 1
    const { data, code } = await getSerialNum()
    if (code == 200) {
      formData.value.serialNumber = data.result
    }
  }
}

const getInitData = async (queryInfoName?: string, type: string = 'edit') => {
  if (!queryInfoName) return
  if (type == 'edit') {
    const params = {
      name: queryInfoName
    }
    const { data } = await getPerson(params)
    if (data.code !== 200) {
      useMessage({
        type: 'error',
        msg: '数据获取失败'
      })
    } else {
      formData.value = data.result
    }
  }
}

const submitEditForm = async (
  formEl: FormInstance | undefined,
  type: 'edit' | 'add'
) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const { code, msg } = await (type == 'edit'
        ? updatePersonInfo(formData.value.id, formData.value)
        : addPersonInfo(formData.value))
      await useTips(code, msg)

      if (type == 'edit') {
        formInstanceRef.value?.resetFields()
      }
    }
  })
}

export {
  getInitData,
  formData,
  formInstanceRef,
  genderOptions,
  departMentOptions,
  workStatusOptions,
  submitEditForm,
  FormRules,
  handleInitData
}
