<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 10:57:59
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 17:52:39
-->
<template>
  <div :class="prefixCls">
    <el-button>
      <icon-src-icon
        v-if="icon != ''"
        :type="iconType"
        :icon="icon"
      ></icon-src-icon>
      {{ text }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useDesign } from '@/hooks'
import type { ButtonType } from 'element-plus'
import type { ButtonSize } from '../types'
import { propTypes } from '@/utils/propTypes'

const prefixCls = useDesign('prefix', 'button')

const props = defineProps({
  text: propTypes.string.def(''),
  type: propTypes.oneOf<ButtonType[]>(['primary']).def('primary'),
  size: propTypes
    .oneOf<ButtonSize[]>(['default', 'large', 'small'])
    .def('small'),
  icon: propTypes.string.def(''),
  iconType: propTypes.oneOf<IconType[]>(['iconify', 'iconfont']).def('iconify')
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-button';

.@{prefix-cls} {
}
</style>
