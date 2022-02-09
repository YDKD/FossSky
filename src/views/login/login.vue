<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './components/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://cdn.jsdelivr.net/gh/YDKD/Blogger/Docker/bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}
</style>
