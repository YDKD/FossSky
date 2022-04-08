<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 15:08:36
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 09:06:21
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
import { defineProps, computed, PropType } from 'vue'
import { useDesign } from '@/hooks'

import { propTypes } from '@/utils/propTypes'

const prefixCls = useDesign('prefix', 'icon')

const props = defineProps({
  icon: propTypes.string.def(''),
  color: propTypes.string.def(''),
  size: propTypes.number.def(16),
  type: propTypes.oneOf<IconType[]>(['iconify', 'iconfont']).def('iconify')
})

const iconfontSize = computed(() => {
  return props.size > 16 ? '2.4rem' : '20px'
})

console.log()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-icon';

.@{prefix-cls} {
  .iconfont {
    font-size: v-bind(iconfontSize);
  }
}
</style>
