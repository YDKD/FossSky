<template>
  <div :class="prefixCls">
    <renderElement></renderElement>
  </div>
</template>

<script lang="tsx" setup>
import { useDesign } from '@/hooks'
import { h, render } from 'vue'

const prefixCls = useDesign('prefix', 'table')

const renderElement = {
  render: () => {
    return h(<el-button>123</el-button>)
  }
}
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-table';

.@{prefix-cls} {
}
</style>
