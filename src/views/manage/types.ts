/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-30 16:13:18
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-30 16:15:25
 */
export interface Person {
  // 身份证号
  IDcard: string
  // 年龄
  age: number
  // 人员创建时间
  createTime: Date
  // 部门
  department: string
  // 职位
  duty: string
  // 性别
  gender: number
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
  updateTime: Date
  // 当前状态
  workStatus: number
  // 入职时间
  workTime: Date
}
