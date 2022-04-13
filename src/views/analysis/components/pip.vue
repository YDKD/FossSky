<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-11 09:10:46
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 16:53:44
-->
<template>
  <div :class="prefixCls">
    <el-skeleton :loading="pipeLoading">
      <Echart :options="pipeOptionsData" height="300px" />
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import { Echart } from '@/components/Echarts'

import { pipeLoading, pipeOptionsData } from '../hooks'

const prefixCls = useDesign('prefix', 'analysis-pipe')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-analysis-pipe';

.@{prefix-cls} {
}
</style>
