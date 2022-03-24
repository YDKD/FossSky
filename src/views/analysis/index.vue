<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 15:42:06
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 15:49:29
-->
<template>
  <div :class="prefixCls">
    <h2>我是analysis</h2>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'analysis')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-analysis';

.@{prefix-cls} {
}
</style>
