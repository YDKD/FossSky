<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 16:04:05
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-02 21:27:55
-->
<template>
  <div :class="prefixCls">
    <div
      :class="[
        '!h-[var(--logo-height)] flex items-center justify-center cursor-pointer pl-3 pt-2'
      ]"
    >
      <img
        src="@/assets/imgs/logo.png"
        class="w-[calc(var(--logo-height)-10px)] h-[calc(var(--logo-height)-10px)]"
      />
      <span :class="['pl-3 text-base font-bold']">{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDesign } from '@/hooks'
import { useAppStore } from '@/store/modules/app'

const prefixCls = useDesign('prefix', 'logo')
const appStore = useAppStore()

const title = computed(() => appStore.getWebSiteTitle)
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-logo';

.@{prefix-cls} {
  color: var(--logo-title-text-color);
}
</style>
