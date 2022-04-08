<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 10:11:27
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 17:54:06
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
      <el-table-column label="工作状态" align="center">
        <template #default="{ row }">
          <div
            class="work-status"
            :class="row.record == 0 ? 'working' : 'leaving'"
          ></div>
        </template>
      </el-table-column>
      <el-table-column label="假期类型" align="center">
        <template #default="{ row }">
          {{ callWithHandle(row.record, getKey(vacationType, row.status)) }}
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
          {{ row.createTime != null ? formatDate(row.createTime) : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="请假结束时间">
        <template #default="{ row }">
          {{ row.endTime != null ? formatDate(row.endTime) : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="请假原由" prop="reason">
        <template #default="{ row }">
          {{ row.reason || '-' }}
        </template>
      </el-table-column>
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
  vacationType,
  formatDate,
  callWithHandle
} from '../hooks'

const prefixCls = useDesign('prefix', 'count-panel')

getInitData()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-count-panel';

.@{prefix-cls} {
  .search {
    width: 20%;
  }
  .work-status {
    width: 14px;
    height: 14px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .working {
    background-color: #0ddb96;
  }
  .leaving {
    background-color: red;
  }
}
</style>
