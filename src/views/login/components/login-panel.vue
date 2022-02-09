<template>
  <div class="login-panel mb-32">
    <h1 class="text-xl font-bold text-white text-center mb-2">后台系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon>账号登录
          </span>
        </template>
        <account-login />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <phone-login />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import accountLogin from './account-login.vue'
import phoneLogin from './phone-login.vue'
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .demo-tabs > ::v-deep .el-tabs__content {
    background-color: #f4f5f7;
    color: #6b778c;
    font-weight: 600;
  }
}
</style>
