<template>
  <div class="login-panel">
    <foss-bg header-text="登录">
      <template #content>
        <div class="account-login mt-3 text-sm">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            label-position="left"
            :rules="LoginFormRules"
            class="demo-ruleForm"
          >
            <el-form-item prop="account">
              <el-input
                v-model="loginForm.account"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
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
            <span class="jump" @click="resetPass">忘记密码</span>
          </div>
          <el-button
            class="w-full login-btn tracking-widest !bg-orange-500"
            @click="login(loginFormRef)"
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
import FossBg from 'components/foss-bg/index.vue'
import { onBeforeUnmount } from 'vue'
import {
  loginFormRef,
  loginForm,
  LoginFormRules,
  checked,
  login,
  startRegister,
  resetPass,
  clearEffect
} from '../hooks'

onBeforeUnmount(() => {
  clearEffect()
})
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
