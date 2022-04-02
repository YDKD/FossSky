/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-30 16:11:48
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-01 16:23:22
 */

export const formatGender = (row: Person): string => {
  return row.gender == 0 ? 'icon-nanren' : 'icon-nvren'
}

export const formatWorkStatus = (row: Person): string => {
  return row.workStatus == 1 ? 'icon-zaizhi' : 'icon-yilizhi'
}
