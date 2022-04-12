<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 15:42:06
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 09:37:30
-->
<template>
  <div :class="prefixCls">
    <div class="count">
      <top-count />
    </div>
    <div :class="['chart mt-8']">
      <el-row justify="space-between" :gutter="20">
        <el-col :xl="14" :lg="14" :md="24" :sm="24" :xs="24">
          <el-card shadow="hover" :class="['!rounded-2xl']">
            <div class="person-add">
              <div :class="['add-panel py-2']">
                <div class="pa-item">
                  <h2 :class="['font-semibold']">Dashboard</h2>
                  <span :class="['text-slate-400']">add person line</span>
                </div>
                <div class="pa-item">
                  <h2 :class="['font-semibold']">{{ total }}人</h2>
                  <span :class="['text-slate-400']">join workers</span>
                </div>
                <div class="pa-item">
                  <h2 :class="['font-semibold']">{{ count_month }}月</h2>
                  <span :class="['text-slate-400']">count workers month</span>
                </div>
              </div>
              <analysis-line />
            </div>
          </el-card>
        </el-col>
        <el-col :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
          <el-card shadow="hover" :class="['!rounded-2xl']">
            <analysis-pipe />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import {
  total,
  count_month,
  getInitLineData,
  getInitPipeData,
  getCountTotalData,
  setCountValue,
  countLoading
} from './hooks'

import AnalysisLine from './components/line.vue'
import AnalysisPipe from './components/pip.vue'
import topCount from './components/topCount.vue'
import TopCount from './components/topCount.vue'

const prefixCls = useDesign('prefix', 'analysis')

const getAllData = async () => {
  await getInitLineData()
  await getInitPipeData()
  await getCountTotalData()
  await setCountValue()

  countLoading.value = false
}
getAllData()
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-analysis';

.@{prefix-cls} {
  .person-add {
    display: flex;
    justify-content: space-between;
    .add-panel {
      min-width: 14%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .pa-item {
      margin: 20px 0;
    }
  }
}
</style>
