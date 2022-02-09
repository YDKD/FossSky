<template>
  <div class="login-panel">
    <h1 class="text-xl font-bold text-white text-center mb-2">后台系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon>账号登录
          </span>
        </template>
        账号
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        手机
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { UserFilled, Iphone } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
</style>
