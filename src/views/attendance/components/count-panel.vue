<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 10:11:27
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 16:30:18
-->
<template>
  <div :class="prefixCls"></div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
const prefixCls = useDesign('prefix', 'count-panel')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-count-panel';

.@{prefix-cls} {
}
</style>
