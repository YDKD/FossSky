<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-04 20:09:57
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-04 21:01:13
-->
<template>
  <div :class="prefixCls">
    <h1 :class="['text-center']">人员信息添加</h1>
    <edit-form type="add" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'Add'
}
</script>

<script lang="ts" setup>
import EditForm from '@/views/components/EditForm/index.vue'
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'person-edit')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-person-add';

.@{prefix-cls} {
}
</style>
