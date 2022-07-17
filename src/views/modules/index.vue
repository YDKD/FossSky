<template>
  <div :class="prefix">
    <component :is="FossTable"></component>
  </div>
</template>

<script lang="ts" setup>
import { FossTable } from '@/components/FossTable'

import { useDesign } from '@/hooks'
const prefix = useDesign('prefix', 'modules')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-modules';

.@{prefix-cls} {
}
</style>
