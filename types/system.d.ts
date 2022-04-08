/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 16:19:48
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 17:46:05
 */

import vue from 'vue'

declare global {
  interface Person {
    // 身份证号
    IDcard: string
    // 年龄
    age: number | string
    // 人员创建时间
    createTime: Date | string
    // 部门
    department: string
    // 职位
    duty: string
    // 性别
    gender: number | string
    // 家庭住址
    homeAddress: string
    // id
    id: number
    // 姓名
    name: string
    // 民族
    nation: string
    // 籍贯
    nativePlace: string
    // 手机号
    phoneNumber: string
    // 员工编号
    serialNumber: string
    // 人员信息更新时间
    updateTime: Date | string
    // 当前状态
    workStatus: number | string
    // 入职时间
    workTime: Date | string
  }
  type IconType = 'iconify' | 'iconfont'
}
