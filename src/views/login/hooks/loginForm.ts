/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 11:22:23
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 14:18:34
 */
import { reactive, ref } from 'vue'
import { FormInstance } from 'element-plus'
import { LoginForm } from '../types'
import router from '@/router'
import { login as loginSystem } from '@/api/postApi'
import resetForm from '@/utils/resetForm'
import { useMessage } from '@/hooks'
import { useCache } from '@/hooks'
import { getUser } from '@/api/getApi'
import { useAppStore } from '@/store/modules/app'
// 自动登录checked
const checked = ref(false)
const loginFormRef = ref<FormInstance>()

const appStore = useAppStore()

const loginForm: LoginForm = reactive({
  account: 'YDKD',
  password: '123456a'
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
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const data = {
        username: loginForm.account,
        password: loginForm.password
      }
      const { code, msg, token } = await loginSystem(data)
      if (code == 200) {
        // set token
        const { cookieCache } = useCache('cookie')
        cookieCache?.setCookie('token', token)

        // get userInfo
        await getUserInfo(loginForm.account)

        // go main
        router.push({ path: '/dashboard/analysis' })
      } else {
        useMessage({ msg: msg, type: 'error' })
      }
    }
  })
}

const getUserInfo = async (account: any) => {
  const userInfo = await getUser(account)
  const { storageCache } = useCache('storage')
  storageCache?.set(appStore.userInfo, userInfo)
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
