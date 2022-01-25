<template>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>

  <div>
    <button @click="welcome">Welcome</button>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const welcome = () => {
  ElMessage.success({
    showClose: true,
    type: 'success',
    message: 'Welcome to my website',
    duration: 2000
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
