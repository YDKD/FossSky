<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-11 10:30:52
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 09:37:59
-->
<template>
  <div :class="[prefixCls, 'mb-2']">
    <div
      v-for="item in countData"
      :key="item.label"
      class="count-item"
      :class="item.class"
    >
      <el-skeleton :loading="countLoading">
        <div class="left">
          <div class="icon">
            <icon-src-icon type="iconfont" :icon="item.icon" />
          </div>
          <div class="label">{{ item.label }}</div>
        </div>
        <div :class="['right font-bold text-2xl']">{{ item.value }}</div>
      </el-skeleton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import { countData, countLoading } from '../hooks'

const prefixCls = useDesign('prefix', 'top-count')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-top-count';

.@{prefix-cls} {
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .count-item {
    width: 23%;
    height: 80px;
    border-radius: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .total_workers {
    background-image: linear-gradient(
      to right bottom,
      rgb(236, 71, 134),
      rgb(185, 85, 164)
    );
  }
  .total_developers {
    background-image: linear-gradient(to right bottom, #5ebbc0, #51c178);
  }
  .total_leaving {
    background-image: linear-gradient(
      to right bottom,
      rgb(252, 188, 37),
      rgb(246, 128, 87)
    );
  }
  .total_colock {
    background-image: linear-gradient(
      to right bottom,
      rgb(86, 205, 243),
      rgb(113, 157, 227)
    );
  }
}
</style>
