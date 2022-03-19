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
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="registerForm.password"
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
              <el-input
                v-model="registerForm.confirmPassword"
                type="password"
                placeholder="请输入确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                v-model="registerForm.email"
                type="email"
                placeholder="请输入邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="flex justify-between">
                <el-input
                  v-model="registerForm.code"
                  placeholder="邮箱验证码"
                ></el-input>
                <el-button
                  :disabled="!passCheckValidate"
                  type="primary"
                  size="default"
                  class="sendBtn"
                  @click="sendEmail"
                  >{{ sendBtnText }}</el-button
                >
              </div>
            </el-form-item>
          </el-form>
          <el-button
            class="w-full register-btn tracking-widest !bg-orange-500"
            @click="register(registerFormRef)"
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
import router from '@/router'

import FossBg from 'components/foss-bg/index.vue'

// hooks
import {
  registerRules,
  registerForm,
  registerFormRef,
  sendEmail,
  sendBtnText,
  register,
  passCheckValidate
} from '../hooks/index'

const startLogin = () => {
  router.push({ path: '/login' })
}
</script>

<style scoped lang="less">
.register-panel {
  .account-register {
    font-size: 12px;
    .register-btn {
      color: #fff;
    }
  }
  .sendBtn {
    margin-left: 5px;
  }
}
</style>
