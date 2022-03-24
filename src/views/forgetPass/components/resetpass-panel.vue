<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 11:44:24
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 15:27:01
-->
<template>
  <div :class="prefixCls">
    <foss-bg header-text="重置密码">
      <template #content>
        <div class="account-register mt-3 text-sm">
          <el-form
            ref="resetPassFormRef"
            :model="resetPassForm"
            label-position="left"
            :rules="registerRules"
            class="demo-ruleForm"
          >
            <el-form-item prop="email">
              <el-input
                v-model="resetPassForm.email"
                type="email"
                placeholder="请输入邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="flex justify-between">
                <el-input
                  v-model="resetPassForm.code"
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
            <el-form-item prop="password">
              <el-input
                v-model="resetPassForm.password"
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
              <el-input
                v-model="resetPassForm.confirmPassword"
                type="password"
                placeholder="请输入确认密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button
            class="w-full register-btn tracking-widest !bg-orange-500"
            @click="register(resetPassFormRef)"
            >重置密码</el-button
          >
          <div class="my-3">
            已有账号?<span class="pl-2 jump" @click="startLogin">马上登录</span>
          </div>
        </div>
      </template>
    </foss-bg>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { onBeforeUnmount } from 'vue'
import FossBg from 'components/foss-bg/index.vue'

// hooks
import {
  registerRules,
  resetPassForm,
  resetPassFormRef,
  sendEmail,
  sendBtnText,
  register,
  passCheckValidate,
  clearEffect
} from '../hooks/index'
import { useDesign } from '@/hooks'
const startLogin = () => {
  router.push({ path: '/login' })
}

const prefixCls = useDesign('prefix', 'forget-pass-panel')

onBeforeUnmount(() => {
  clearEffect()
})
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-forget-pass-panel';

.@{prefix-cls} {
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
