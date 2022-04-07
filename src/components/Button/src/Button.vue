<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 10:57:59
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 14:58:26
-->
<template>
  <div :class="prefixCls">
    <el-button>
      <icon-src-icon
        v-if="icon != ''"
        type="iconfont"
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
  type: propTypes.oneOf<ButtonType[]>([]).def('primary'),
  size: propTypes.oneOf<ButtonSize[]>([]).def(),
  icon: propTypes.string.def('')
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-button';

.@{prefix-cls} {
}
</style>
