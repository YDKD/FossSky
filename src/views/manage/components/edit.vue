<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 14:22:20
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-01 16:08:43
-->
<template>
  <div :class="prefixCls">
    <h1 :class="['text-center']">{{ title }}</h1>
    <edit-form v-if="showEdit" type="edit" :query-info-name="editPersonName" />
  </div>
</template>

<script lang="ts" setup>
import { useDesign, useMessage } from '@/hooks'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

import EditForm from '@/views/components/EditForm/index.vue'

const prefixCls = useDesign('prefix', 'person-edit')

const { query } = useRoute()

const editPersonName: string | undefined = query.name as string

const title = computed(() => {
  return editPersonName ? '人员信息编辑-' + editPersonName : ''
})

let showEdit = ref(false)

if (!editPersonName) {
  useMessage({
    type: 'warning',
    msg: '未检测到当前用户'
  })
} else {
  showEdit.value = true
}
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-person-edit';

.@{prefix-cls} {
}
</style>
