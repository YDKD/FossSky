<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 15:08:36
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-29 16:34:03
-->
<template>
  <ElIcon :class="prefixCls" :size="size" :color="color">
    <span class="iconify" :data-icon="[`fa:${icon}`]"></span>
  </ElIcon>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'icon')

const props = defineProps({
  icon: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: Number,
    default: () => 16
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-';

.@{prefix-cls} {
}
</style>
