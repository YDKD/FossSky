<template>
  <div class="login-panel mb-32 p-5">
    <!-- label -->
    <h1
      class="text-center pb-2 text-orange-500 border-b border-b-orange-500 font-bold text-xl tracking-widest"
    >
      登录
    </h1>
    <component :is="isLogin ? accountLogin : ''"></component>
  </div>
</template>

<script lang="ts" setup>
import accountLogin from './account-login.vue'

const isLogin: Boolean = true
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  height: 400px;
  background-color: #fff;
}
</style>
