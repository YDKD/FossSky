<template>
  <div class="forgetPass">
    <reset-pass-panel />
  </div>
</template>

<script lang="ts" setup>
import resetPassPanel from './components/resetpass-panel.vue'
</script>

<style scoped lang="less">
.forgetPass {
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
