/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-21 14:00:16
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-23 14:34:32
 */
import { store } from '../index'
import type { RouteRecordRaw } from 'vue-router'

export interface PermissionState {
  routers: RouteRecordRaw[]
  hasRoutes: boolean
}

export const usePermission = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routers: [],
    hasRoutes: false
  }),
  getters: {
    getRouters(): RouteRecordRaw[] {
      return this.routers
    }
  },
  actions: {
    addRoutes(state: RouteRecordRaw[]): void {
      this.routers = state
    },
    setIsAddRouters(state: boolean): void {
      this.hasRoutes = state
    }
  }
})

export const usePermissionStoreWithOut = () => {
  return usePermission(store)
}
