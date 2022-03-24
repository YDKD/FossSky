<template>
  <div :class="prefixCls">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useDesign } from './hooks'

const prefixCls = useDesign('prefix', 'app')
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-app';

.@{prefix-cls}{
  height: 100%;
}
</style>
