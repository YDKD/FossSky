<template>
  <div :class="prefixCls">
    <reset-pass-panel />
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import resetPassPanel from './components/resetpass-panel.vue'

const prefixCls = useDesign('prefix', 'forget-pass')
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-forget-pass';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/imgs/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ccc;
}
</style>
