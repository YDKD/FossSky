<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:43:39
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-02 17:47:05
-->
<template>
  <div :class="[prefixCls, 'mt-4']">
    <el-form
      ref="formInstanceRef"
      :model="formData"
      label-width="200x"
      label-position="top"
    >
      <el-card>
        <template #header>
          <div class="card-header">
            <span>个人基础信息</span>
          </div>
        </template>
        <div class="base-info">
          <el-form-item label="姓名：">
            <el-input v-model="formData.name" />
          </el-form-item>
          <el-form-item label="年龄：">
            <el-input v-model="formData.age" />
          </el-form-item>
          <el-form-item label="性别：">
            <el-select
              v-model="formData.gender"
              class="m-2"
              placeholder="请选择职工性别"
            >
              <el-option
                v-for="item in genderOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="民族：">
            <el-input v-model="formData.nation" />
          </el-form-item>
          <el-form-item label="籍贯：">
            <el-input v-model="formData.nativePlace" />
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="formData.phoneNumber" />
          </el-form-item>
          <el-form-item label="身份证号：" class="id-card">
            <el-input v-model="formData.IDcard" />
          </el-form-item>
          <el-form-item label="家庭住址：">
            <el-input v-model="formData.homeAddress" />
          </el-form-item>
        </div>
      </el-card>
      <el-card class="mt-3">
        <template #header>
          <div class="card-header">
            <span>个人职位信息</span>
          </div>
        </template>
        <div class="base-info works-info">
          <el-form-item label="职工编号：">
            <el-input v-model="formData.serialNumber" />
          </el-form-item>
          <el-form-item label="部门：">
            <el-select
              v-model="formData.department"
              class="m-2"
              placeholder="请选择职工性别"
            >
              <el-option
                v-for="item in departMentOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="当前状态：">
            <el-select
              v-model="formData.workStatus"
              class="m-2"
              placeholder="请选择职工性别"
            >
              <el-option
                v-for="item in workStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="入职时间：">
            <el-date-picker
              v-model="formData.createTime"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
            />
          </el-form-item>
          <el-form-item label="首次参加工作时间：" class="workTime">
            <el-date-picker
              v-model="formData.workTime"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
            />
          </el-form-item>
          <el-form-item label="信息更新时间：">
            <el-date-picker
              v-model="formData.updateTime"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
            />
          </el-form-item>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useDesign } from '@/hooks'
import { getInitData, formData, formInstanceRef } from './hooks'

import type { EditType } from './types'

const prefixCls = useDesign('prefix', 'edit-form')

const genderOptions = [
  {
    label: '男',
    value: 0
  },
  {
    label: '女',
    value: 1
  }
]

const departMentOptions = ['研发部', '数据组']

const workStatusOptions = [
  {
    label: '在职',
    value: 1
  },
  {
    label: '离职',
    value: 0
  }
]

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
  .base-info {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    :deep(.el-select) {
      margin: 0 !important;
    }
    :deep(.el-form-item) {
      width: 20%;
      margin: 10px 1.2rem;
    }
  }
}
</style>
