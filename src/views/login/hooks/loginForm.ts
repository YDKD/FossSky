/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 11:22:23
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 11:43:17
 */
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { LoginForm } from '../types'
import router from '@/router'

// 自动登录checked
const checked = ref(false)
const loginFormRef = ref<FormInstance>()

const loginForm: LoginForm = reactive({
  account: '',
  password: ''
})

const LoginFormRules = reactive({
  account: [
    {
      required: true,
      message: '请输入用户名/邮箱',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

// login
const login = () => {}

const startRegister = () => {
  router.push({ path: '/register' })
}

const resetPass = () => {
  router.push({ path: '/reset-pass' })
}

export {
  loginFormRef,
  loginForm,
  LoginFormRules,
  checked,
  login,
  startRegister,
  resetPass
}
