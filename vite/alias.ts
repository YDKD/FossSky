/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 11:40:34
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 16:41:18
 */
import path from 'path'
import { AliasOptions } from 'vite'
import { resolve } from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

const alias = [
  {
    find: /\@\//,
    replacement: `${pathResolve('src')}/`
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
