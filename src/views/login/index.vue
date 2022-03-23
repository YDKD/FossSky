<template>
  <div :class="prefixCls">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './components/login-panel.vue'
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'login')
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-login';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/img/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ccc;
}
</style>
