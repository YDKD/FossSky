<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 10:11:27
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 10:34:15
-->
<template>
  <div :class="prefixCls">
    <div class="search">
      <el-input
        v-model="queryData.search"
        placeholder="输入职工信息进行检索"
        class="input-with-select"
        clearable
        @clear="getInitData"
      >
        <template #append>
          <button-src-button
            icon="search"
            icon-type="iconify"
            @click="getInitData"
          />
        </template>
      </el-input>
    </div>
    <el-table :data="tableData" border stripe :class="['my-2']">
      <el-table-column label="职工姓名" prop="username" align="center">
      </el-table-column>
      <el-table-column label="假期类型" align="center">
        <template #default="{ row }">
          {{ getKey(vacationType, row.status) }}
        </template>
      </el-table-column>
      <el-table-column label="是否记录" align="center">
        <template #default="{ row }">
          <icon-src-icon
            type="iconfont"
            :icon="getKey(record, row.record)"
          ></icon-src-icon>
        </template>
      </el-table-column>
      <el-table-column label="请假开始时间">
        <template #default="{ row }">
          {{
            moment(row.createTime).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
          }}
        </template>
      </el-table-column>
      <el-table-column label="请假结束时间">
        <template #default="{ row }">
          {{ moment(row.endTime).utcOffset(8).format('YYYY/MM/DD HH:mm:ss') }}
        </template>
      </el-table-column>
      <el-table-column label="请假原由" prop="reason"></el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="queryData.page"
      :hide-on-single-page="unref(hideSinglePage)"
      :page-size="queryData.pageSize"
      background
      layout="total, prev, pager, next"
      :total="total"
      @current-change="getInitData"
    />
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { useDesign } from '@/hooks'
import { unref } from 'vue'
import { getKey } from '@/utils/getKey'

import {
  getInitData,
  tableData,
  total,
  queryData,
  hideSinglePage,
  record,
  vacationType
} from '../hooks'
import Icon from '@/components/Icon/src/Icon.vue'

const prefixCls = useDesign('prefix', 'count-panel')

getInitData()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-count-panel';

.@{prefix-cls} {
  .search {
    width: 20%;
  }
}
</style>
