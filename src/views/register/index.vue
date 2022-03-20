<template>
  <div class="register">
    <register-panel />
  </div>
</template>

<script lang="ts" setup>
import registerPanel from './components/register-panel.vue'
</script>

<style scoped>
.register {
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
