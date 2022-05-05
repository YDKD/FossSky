<template>
  <div :class="prefix">
    <div class="content">
      <div class="label">姓名：张欣悦</div>
      <div class="label">学号：1841013310</div>
      <div class="label">学院：艺术与科技学院</div>
      <div class="label">辅导员：刘婷婷</div>
      <div class="icon">
        <icon-src-icon
          icon="icon-gougou1"
          type="iconfont"
          :size="120"
        ></icon-src-icon>
      </div>
      <div class="txt">通行</div>
      <div class="tips">注意：请在请假时间范围内扫码</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'

const prefix = useDesign('prefix', 'tong-xing')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-tong-xing';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  background-color: #2ba667;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444444bb;
  font-size: 18px;
  .content {
    background-color: #fff;
    border-radius: 15px;
    padding: 3% 10%;
    margin-bottom: 20%;
    .label {
      margin-left: 20%;
    }
    .icon {
      text-align: center;
      margin: 2.5rem 0;
    }
    .txt {
      color: #2ba667;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      margin: 3rem 0;
    }
  }
}
</style>
