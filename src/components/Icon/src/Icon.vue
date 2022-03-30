<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 15:08:36
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-30 19:47:30
-->
<template>
  <ElIcon :class="prefixCls" :size="size" :color="color">
    <span
      v-if="type == 'iconify'"
      class="iconify"
      :data-icon="[`fa:${icon}`]"
    ></span>
    <i v-else :class="['iconfont', icon]"></i>
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
  },
  type: {
    type: String,
    default: () => 'iconify'
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-icon';

.@{prefix-cls} {
  .iconfont {
    font-size: 2.4rem;
  }
}
</style>
