<template>
  <div :class="prefixCls">
    <div class="search">
      <el-input
        v-model="searchName"
        placeholder="输入职工姓名进行检索"
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
    <div :class="['salary-form mt-2']">
      <el-card v-if="queried" shadow="hover">
        <el-form ref="salaryFormRef" :model="salaryForm" label-width="80px">
          <el-form-item label="工资编号">
            <el-input v-model="salaryForm.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="职工姓名">
            <el-input v-model="salaryForm.workerName" disabled></el-input>
          </el-form-item>
          <el-form-item label="职工编号">
            <el-input v-model="salaryForm.serialNumber" disabled></el-input>
          </el-form-item>
          <el-form-item label="基本工资">
            <el-input-number
              v-model="salaryForm.base_pay"
              type="number"
              :step="step"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="绩效工资">
            <el-input-number
              v-model="salaryForm.performance_pay"
              type="number"
              :step="step"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="工资补贴">
            <el-input-number
              v-model="salaryForm.performance_pay"
              type="number"
              :step="step"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="所交税额">
            <el-input-number
              v-model="salaryForm.tax"
              type="number"
              :step="step"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="应发工资">
            <span>{{ real_pay }}元</span>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submit">更新工资信息</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import {
  searchName,
  getInitData,
  queried,
  salaryForm,
  salaryFormRef,
  submit,
  real_pay,
  step
} from '../hooks'

const prefixCls = useDesign('prefix', 'salary-panel')
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-salary-panel';

.@{prefix-cls} {
  .search {
    width: 20%;
  }
  .salary-form {
    width: 40%;
  }
}
</style>
