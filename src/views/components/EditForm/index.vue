<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:43:39
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-01 17:34:50
-->
<template>
  <div :class="prefixCls">
    <div class="base-info">
      <el-form ref="formInstanceRef" :model="formData" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="formData.name" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useDesign } from '@/hooks'
import { getInitData, formData, formInstanceRef } from './hooks'

import type { EditType } from './types'

const prefixCls = useDesign('prefix', 'edit-form')

const props = defineProps({
  type: {
    type: String as PropType<EditType>,
    default: () => 'edit'
  },
  queryInfoName: {
    type: String
  }
})

getInitData(props)
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-edit-form';

.@{prefix-cls} {
}
</style>
