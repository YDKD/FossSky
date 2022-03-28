/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-21 14:00:16
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-28 17:26:27
 */
import { store } from '../index'

export interface PermissionState {
  routers: CustomRouteRecordRaw[]
  hasRoutes: boolean
}

export const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routers: [],
    hasRoutes: false
  }),
  getters: {
    getRouters(): CustomRouteRecordRaw[] {
      return this.routers
    }
  },
  actions: {
    addRoutes(state: CustomRouteRecordRaw[]): void {
      this.routers = state
    },
    setIsAddRouters(state: boolean): void {
      this.hasRoutes = state
    }
  }
})

export const usePermissionStoreWithOut = () => {
  return usePermissionStore(store)
}
