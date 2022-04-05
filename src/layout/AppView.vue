<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="appStore.getAnimateMode" mode="out-in" appear>
      <!-- <keep-alive> -->
      <component :is="Component" :key="route.path" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-';

.@{prefix-cls} {
}
</style>
