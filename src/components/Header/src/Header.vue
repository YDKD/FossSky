<template>
  <div :class="[prefixCls, 'flex items-center justify-end h-full']">
    <div :class="['person h-full']">
      <el-dropdown trigger="click" :class="['h-full']">
        <div
          :class="['el-dropdown-link h-full flex items-center cursor-pointer']"
        >
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span>{{ username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span @click="logout">退出系统</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign, useCache, useClear } from '@/hooks'
import router from '@/router'
import { useAppStore } from '@/store/modules/app'

const prefixCls = useDesign('prefix', 'header')

const appStore = useAppStore()

const { storageCache } = useCache()

const username = storageCache?.get(appStore.userInfo)?.username ?? 'YDKD'

const logout = () => {
  useClear()
  router.push({ path: '/login' })
}
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-';

.@{prefix-cls} {
}
</style>
