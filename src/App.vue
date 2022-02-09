<template>
  <div id="el-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { getData } from '@/api/getApi'

const getInitData = async () => {
  let { returnCode, data, success } = await getData()
  console.log('returnCode', returnCode)
  console.log('data', data)
  console.log('success', success)
}

// getInitData()
</script>

<style scoped lang="less">
#el-container {
  height: 100%;
}
</style>
