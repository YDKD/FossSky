<template>
  <div :class="prefixCls">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
const prefixCls = useDesign('prefix', 'container')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-container';

.@{prefix-cls} {
}
</style>
