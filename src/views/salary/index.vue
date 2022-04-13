<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-12 10:18:53
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 10:23:50
-->
<template>
  <div :class="prefixCls">
    <salary-panel />
  </div>
</template>

<script lang="ts" setup>
import salaryPanel from './components/salary-panel.vue'
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'person-salary')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-person-salary';

.@{prefix-cls} {
}
</style>
