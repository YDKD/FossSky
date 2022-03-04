/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 11:40:34
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-04 11:45:11
 */
import path from 'path'
import { AliasOptions } from 'vite'

const alias = [
  {
    find: '@',
    replacement: path.resolve(__dirname, '../src')
  },
  {
    find: 'components',
    replacement: path.resolve(__dirname, '../src/components')
  },
  {
    find: 'store',
    replacement: path.resolve(__dirname, '../src/store')
  }
] as AliasOptions

export default alias
