<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-08 13:44:52
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 16:53:48
-->
<template>
  <div :class="prefixCls">
    <el-skeleton :loading="lineLoading" animated>
      <Echart :options="lineOptionsData" height="300px" />
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import { Echart } from '@/components/Echarts'
import { lineLoading, lineOptionsData } from '../hooks'

const prefixCls = useDesign('prefix', 'analysis-line')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-analysis-line';

.@{prefix-cls} {
  width: 100%;
}
</style>
