/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-21 14:00:16
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-21 14:58:35
 */
import { store } from '../index'
import type { RouteRecordRaw } from 'vue-router'

export interface PermissionState {
  routers: RouteRecordRaw[]
}

export const usePermission = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routers: []
  }),
  getters: {
    getRouters(): RouteRecordRaw[] {
      return this.routers
    }
  },
  actions: {
    generateRoutes(): RouteRecordRaw[] {
      return this.routers
    }
  }
})

export const usePermissionStoreWithOut = () => {
  return usePermission(store)
}
