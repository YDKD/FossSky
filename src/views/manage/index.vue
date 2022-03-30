<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 14:17:43
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-30 15:02:06
-->
<template>
  <div :class="prefixCls">
    <el-card class="box-card !rounded-2xl">
      <template #header>
        <div class="card-header">
          <span>人员管理</span>

          <el-tooltip content="添加人员" effect="customized">
            <icon-src-icon
              icon="user-plus"
              class="cursor-pointer"
              color="var(--add-button)"
              :size="16"
            ></icon-src-icon>
          </el-tooltip>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { getPersonList } from '@/api/getApi'
import { useDesign } from '@/hooks'

const prefixCls = useDesign('prefix', 'person-manage')

const getInitData = async () => {
  await getPersonList()
}

getInitData()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-person-manage';

.@{prefix-cls} {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
