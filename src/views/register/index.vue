<template>
  <div :class="prefixCls">
    <register-panel />
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import registerPanel from './components/register-panel.vue'
const prefixCls = useDesign('prefix', 'register')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-register';

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
