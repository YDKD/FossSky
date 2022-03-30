import { GLOBAL_USER_SIGN } from '@/global'

/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 09:19:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-30 20:56:46
 */
export interface AppState {
  userInfo: string
  webSiteTitle: string
  collapse: boolean
  animateMode: string
}

export const appGlobalModules: AppState = {
  userInfo: GLOBAL_USER_SIGN,
  webSiteTitle: import.meta.env.VITE_SITE_TITLE,
  collapse: false,
  animateMode: 'fade-slide'
}
