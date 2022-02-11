<template>
  <div class="register-panel">
    <foss-bg header-text="注册">
      <template #content>
        <div class="account-register mt-3 text-sm">
          <el-form
            ref="registerFormRef"
            :model="registerForm"
            label-position="left"
            :rules="registerRules"
            class="demo-ruleForm"
          >
            <el-form-item prop="account">
              <el-input
                v-model="registerForm.account"
                placeholder="用户名/邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="registerForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
              <el-input
                v-model="registerForm.confirmPassword"
                placeholder="密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button
            class="w-full register-btn tracking-widest !bg-orange-500"
            @click="register"
            >注册</el-button
          >
          <div class="my-3">
            已有账号?<span class="pl-2 jump" @click="startLogin">马上登录</span>
          </div>
        </div>
      </template>
    </foss-bg>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import router from '@/router'
import { RegisterForm } from '../types'

import FossBg from 'components/foss-bg/index.vue'

type registerFormInstance = InstanceType<typeof ElForm>
const registerFormRef = ref<registerFormInstance>()

const registerForm: RegisterForm = reactive({
  account: '',
  password: '',
  confirmPassword: ''
})

const registerRules = reactive({
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
    },
    {
      min: 6,
      max: 20,
      message: '密码长度为6-20',
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: 'blur'
    }
  ]
})

const startLogin = () => {
  router.push({ path: '/login' })
}
const register = () => {}
</script>

<style scoped lang="less">
.register-panel {
  .account-register {
    font-size: 12px;
    .register-btn {
      color: #fff;
    }
  }
}
</style>
