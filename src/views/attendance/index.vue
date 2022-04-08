<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 09:43:12
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-06 10:13:21
-->
<template>
  <div :class="prefixCls">
    <count-pnale />
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import countPnale from './components/count-panel.vue'
const prefixCls = useDesign('prefix', 'person-attendance')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-person-attendance';

.@{prefix-cls} {
}
</style>
