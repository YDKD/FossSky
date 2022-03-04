<template>
  <div class="login-panel">
    <foss-bg header-text="登录">
      <template #content>
        <div class="account-login mt-3 text-sm">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="rules"
            label-position="left"
            class="demo-ruleForm"
          >
            <el-form-item prop="account">
              <el-input
                v-model="loginForm.account"
                placeholder="用户名/邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="login-middle flex justify-between items-center my-3">
            <el-checkbox
              v-model="checked"
              label="下次自动登录"
              class="text-sm"
            ></el-checkbox>
            <span class="jump">忘记密码</span>
          </div>
          <el-button
            class="w-full login-btn tracking-widest !bg-orange-500"
            @click="login"
            >登录</el-button
          >
          <div class="my-3">
            还没有账号?<span class="pl-2 jump" @click="startRegister"
              >马上注册</span
            >
          </div>
        </div>
      </template>
    </foss-bg>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { LoginForm } from '../types'
import router from '@/router'
import FossBg from 'components/foss-bg/index.vue'

type FormInstance = InstanceType<typeof ElForm>

// 自动登录checked
let checked = ref(false)
const loginFormRef = ref<FormInstance>()

const loginForm: LoginForm = reactive({
  account: '',
  password: ''
})

const rules = reactive({
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
</script>

<style scoped lang="less">
.login-panel {
  .account-login {
    font-size: 12px;
    .login-btn {
      color: #fff;
    }
  }
}
</style>
