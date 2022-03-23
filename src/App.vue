<template>
  <div id="el-container">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-app';

#el-container {
  height: 100%;
}
</style>
