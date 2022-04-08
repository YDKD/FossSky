<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:43:39
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 14:51:56
-->
<template>
  <div :class="[prefixCls, 'mt-4']">
    <el-form
      ref="formInstanceRef"
      :model="formData"
      :rules="FormRules"
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
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="formData.name" />
          </el-form-item>
          <el-form-item label="年龄：" prop="age">
            <el-input v-model="formData.age" />
          </el-form-item>
          <el-form-item label="性别：" prop="gender">
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
          <el-form-item label="民族：" prop="nation">
            <el-input v-model="formData.nation" />
          </el-form-item>
          <el-form-item label="籍贯：" prop="nativePlace">
            <el-input v-model="formData.nativePlace" />
          </el-form-item>
          <el-form-item label="联系电话：" prop="phoneNumber">
            <el-input v-model="formData.phoneNumber" />
          </el-form-item>
          <el-form-item label="身份证号：" class="id-card" prop="IDcard">
            <el-input v-model="formData.IDcard" />
          </el-form-item>
          <el-form-item label="家庭住址：" prop="homeAddress">
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
          <el-form-item label="职工编号：" prop="serialNumber">
            <el-input
              v-model="formData.serialNumber"
              :disabled="disableSelected"
            />
          </el-form-item>
          <el-form-item label="部门：" prop="department">
            <el-select
              v-model="formData.department"
              class="m-2"
              placeholder="请选择职工部门"
            >
              <el-option
                v-for="item in departMentOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="当前状态：" prop="workStatus">
            <el-select
              v-model="formData.workStatus"
              :disabled="disableSelected"
              class="m-2"
              placeholder="请选择职工当前工作状态"
            >
              <el-option
                v-for="item in workStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="入职时间：" prop="createTime">
            <el-date-picker
              v-model="formData.createTime"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
            />
          </el-form-item>
          <el-form-item
            label="首次参加工作时间："
            class="workTime"
            prop="workTime"
          >
            <el-date-picker
              v-model="formData.workTime"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
            />
          </el-form-item>
          <el-form-item label="信息更新时间：" prop="updateTime">
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

    <div class="save text-center">
      <el-button
        size="default"
        :class="['mt-3']"
        @click="submitEditForm(formInstanceRef, type)"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed, onBeforeUnmount } from 'vue'
import { useDesign } from '@/hooks'
import {
  formData,
  formInstanceRef,
  genderOptions,
  departMentOptions,
  workStatusOptions,
  submitEditForm,
  FormRules,
  handleInitData
} from './hooks'

import type { EditType } from './types'
import { propTypes } from '@/utils/propTypes'

const prefixCls = useDesign('prefix', 'edit-form')

const props = defineProps({
  type: propTypes.oneOf<EditType[]>(['add', 'edit']).def('edit'),
  queryInfoName: propTypes.string.def('')
})

handleInitData(props)

onBeforeUnmount(() => {
  formInstanceRef.value?.resetFields()
})

const disableSelected = computed(() => {
  return props.type == 'add' ? true : false
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-edit-form';

.@{prefix-cls} {
  .base-info {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    :deep(.el-select) {
      margin: 0 !important;
    }
    :deep(.el-select),
    :deep(.el-input) {
      width: 100% !important;
    }
    :deep(.el-form-item) {
      width: 20%;
      margin: 10px 1.2rem;
    }
  }
}
</style>
