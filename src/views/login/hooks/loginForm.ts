/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 11:22:23
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-21 11:49:34
 */
import { reactive, ref } from 'vue'
import { FormInstance } from 'element-plus'
import { LoginForm } from '../types'
import router from '@/router'
import { login as loginSystem } from '@/api/postApi'
import resetForm from '@/utils/resetForm'
import useMessage from '@/hooks/web/useMessage'
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
      message: '请输入用户名',
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
const login = async () => {
  const data = {
    username: loginForm.account,
    password: loginForm.password
  }
  const { code, msg } = await loginSystem(data)
  if (code == 200) {
    // start login
  } else {
    useMessage({ msg: msg, type: 'error' })
  }
}

const startRegister = () => {
  router.push({ path: '/register' })
}

const resetPass = () => {
  router.push({ path: '/reset-pass' })
}

// clear effect
const clearEffect = () => {
  resetForm(loginFormRef.value)
  loginForm.account = ''
  loginForm.password = ''
}

export {
  loginFormRef,
  loginForm,
  LoginFormRules,
  checked,
  login,
  startRegister,
  resetPass,
  clearEffect
}
