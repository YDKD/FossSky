/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-19 15:54:49
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-21 13:39:17
 */
import { computed, reactive, ref } from 'vue'
import { RegisterForm } from '../types'
import type { FormInstance } from 'element-plus'
import router from '@/router'
import resetForm from '@/utils/resetForm'

// requests
import { checkExistInfo } from '@/api/getApi'
import { sendEmailCode, register as registerUser } from '@/api/postApi'
import useMessage from '@/hooks/web/useMessage'

const registerFormRef = ref<FormInstance>()

const countDown = ref(60)
let sendEmailStatus = false
const passCheckValidate = ref(false)
let timer: any = null

const sendBtnText = computed(() => {
  return countDown.value == 60 ? '发送验证码' : `倒计时${countDown.value}秒`
})

const emailReg =
  /^[a-zA-Z0-9_-]+@([a-z0-9]+[-a-z0-9]*[a-z0-9]+\.)+(com|cn|net|org)$/

const registerForm: RegisterForm = reactive({
  account: '',
  password: '',
  confirmPassword: '',
  email: '',
  code: ''
})

const validateAccount = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名密码'))
  } else {
    ;(async () => {
      if (value.length > 10) {
        return callback('用户名长度不得大于10')
      }
      const params = {
        account: value
      }
      const { code, msg } = await checkExistInfo(params)
      if (code != 200) {
        callback(msg)
      } else {
        callback()
      }
    })()
  }
}

const validateCommonInfo = (value: string, callback: any, flag: boolean) => {
  let passCheck = true
  if (value === '') {
    passCheck = false
    callback(flag ? '请输入密码' : '请输入确认密码')
  } else {
    const len = value.length
    if (len < 6 || len > 10) {
      callback('密码长度在6-10位')
      passCheck = false
    }
  }

  return passCheck
}

const validatePass = (rule: any, value: string, callback: any) => {
  const flag = validateCommonInfo(value, callback, true)
  if (flag) {
    if (/^(?![^a-zA-Z]+$)(?!\D+$)/.test(value)) {
      callback()
    } else {
      callback(new Error('密码格式不正确，应包含字母、数字'))
    }
  }
}

const validateConfirmPass = (rule: any, value: string, callback: any) => {
  const flag = validateCommonInfo(value, callback, false)
  if (flag) {
    if (value !== registerForm.password) {
      callback('两次密码不一致')
    } else {
      callback()
    }
  }
}

const validateEmail = (rule: any, value: string, callback: any) => {
  if (value === '') {
    return callback('请输入邮箱')
  }
  ;(async () => {
    if (!emailReg.test(value)) {
      callback('邮箱格式错误')
    } else {
      const params = {
        email: value
      }
      const { code, msg } = await checkExistInfo(params)
      if (code != 200) {
        passCheckValidate.value = false
        callback(msg)
      } else {
        passCheckValidate.value = true
        callback()
      }
    }
  })()
}

const registerRules = reactive({
  account: [
    {
      validator: validateAccount,
      trigger: 'blur'
    }
  ],
  password: [
    {
      validator: validatePass,
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    {
      validator: validateConfirmPass,
      trigger: 'blur'
    }
  ],
  email: [
    {
      validator: validateEmail,
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入邮箱验证码',
      trigger: 'blur'
    }
  ]
})

const sendEmail = async () => {
  if (sendEmailStatus) {
    return useMessage({ type: 'warning', msg: `${countDown.value}秒后重试!` })
  }
  if (registerForm.email === '') {
    useMessage({ type: 'warning', msg: '请先输入注册邮箱' })
  } else {
    if (emailReg.test(registerForm.email)) {
      const data = {
        email: registerForm.email
      }
      const { code, msg } = await sendEmailCode(data)
      if (code === 200) {
        useMessage({ msg: msg })
        handleSendPending()
      } else {
        useMessage({ type: 'error', msg: '邮件发送失败！' })
      }
    } else {
      useMessage({ type: 'error', msg: '邮箱格式错误' })
    }
  }
}

const handleSendPending = () => {
  sendEmailStatus = true
  timer = setInterval(() => {
    countDown.value--
    if (countDown.value == 0) {
      clearInterval(timer)
      countDown.value = 60
      sendEmailStatus = false
    }
  }, 1000)
}

const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const data = {
        username: registerForm.account,
        password: registerForm.password,
        email: registerForm.email,
        code: registerForm.code
      }
      const { code, msg } = await registerUser(data)
      resetForm(registerFormRef.value)
      if (code === 200) {
        router.push('/login')
        passCheckValidate.value = false
        useMessage({ msg: '用户信息注册成功' })
      } else {
        useMessage({ msg: msg, type: 'error' })
      }
    } else {
      return false
    }
  })
}

// clear effect
const clearEffect = () => {
  clearInterval(timer)
  resetForm(registerFormRef.value)
}

export {
  registerRules,
  registerForm,
  registerFormRef,
  sendEmail,
  sendBtnText,
  register,
  passCheckValidate,
  clearEffect
}
