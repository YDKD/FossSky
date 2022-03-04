<template>
  <div class="foss-bg mb-32 p-5 rounded">
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
import { defineProps, withDefaults } from 'vue'
interface Props {
  headerText?: string
}

const props = withDefaults(defineProps<Props>(), {
  headerText: '登录'
})
</script>

<style scoped lang="less">
.foss-bg {
  width: 320px;
  height: 400px;
  background-color: #fff;
}
</style>
