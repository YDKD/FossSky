/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 09:18:18
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-25 11:15:37
 */
import { appGlobalModules } from '@/config'
import type { AppState } from '@/config'
import { defineStore } from 'pinia'
import { store } from '../index'

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => appGlobalModules,
  getters: {
    getWebSiteTitle(): string {
      return this.webSiteTitle
    }
  }
})

// 保证在 main.ts 中提前引入的 ts 文件中使用了 pinia
// 但是此时的pinia还是未全局注册的，所以需要先创建一个pinia
export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
