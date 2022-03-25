<template>
  <div :class="[prefixCls, 'mb-32', 'p-5', 'rounded', 'text-orange-500']">
    <!-- label -->
    <h1
      class="text-center pb-2 text-orange-500 border-b border-b-orange-500 font-bold text-xl tracking-widest"
    >
      {{ props.headerText }}
    </h1>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import { defineProps, withDefaults } from 'vue'

const prefixCls = useDesign('prefix', 'bg-panel')

interface Props {
  headerText?: string
}

const props = withDefaults(defineProps<Props>(), {
  headerText: '登录'
})
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-bg-panel';

.@{prefix-cls} {
  width: 320px;
  height: 400px;
  background-color: #fff;
}
</style>
