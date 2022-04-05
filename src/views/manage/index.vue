<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 14:17:43
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 14:08:17
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
              @click="addPerson"
            ></icon-src-icon>
          </el-tooltip>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%" center>
        <el-table-column fixed prop="name" label="员工姓名" width="120" />
        <el-table-column label="性别" width="80">
          <template #default="{ row }">
            <icon-src-icon
              type="iconfont"
              :size="40"
              :icon="formatGender(row)"
            />
          </template>
        </el-table-column>
        <el-table-column label="在职情况" width="100" class-name="custom-cell">
          <template #default="{ row }">
            <icon-src-icon
              type="iconfont"
              :size="40"
              :icon="formatWorkStatus(row)"
            />
          </template>
        </el-table-column>
        <el-table-column prop="serialNumber" label="编号" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="nation" label="民族" />
        <el-table-column prop="nativePlace" label="籍贯" />
        <el-table-column prop="IDcard" label="身份证号" min-width="180" />
        <el-table-column prop="department" label="部门" />
        <el-table-column prop="duty" label="职位" />
        <el-table-column prop="homeAddress" label="家庭住址" />
        <el-table-column prop="phoneNumber" label="联系电话" min-width="120" />
        <el-table-column label="入职时间" min-width="180">
          <template #default="{ row }">
            {{
              moment(row.createTime).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
            }}
          </template>
        </el-table-column>
        <el-table-column label="信息更新时间" min-width="180">
          <template #default="{ row }">
            {{
              moment(row.updateTime).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
            }}
          </template>
        </el-table-column>
        <el-table-column label="首次参加工作时间" min-width="180">
          <template #default="{ row }">
            {{
              moment(row.workTime).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
            }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="{ row }">
            <div class="operate">
              <icon-src-icon
                icon="icon-edit"
                class="cursor-pointer"
                type="iconfont"
                @click="editPerson(row)"
              ></icon-src-icon>
              <icon-src-icon
                icon="icon-shanchu"
                class="cursor-pointer"
                type="iconfont"
                @click="deletePerson(row)"
              ></icon-src-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks'
import moment from 'moment'

import {
  formatGender,
  formatWorkStatus,
  tableData,
  getInitData,
  addPerson,
  editPerson,
  deletePerson
} from './hooks'

const prefixCls = useDesign('prefix', 'person-manage')

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
  .custom-cell {
    height: 100%;
  }
  .operate {
    display: flex;
    justify-content: space-between;
    padding: 0 1.3rem;
  }
}
</style>
