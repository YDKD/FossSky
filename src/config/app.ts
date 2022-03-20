/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 09:19:32
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 09:37:34
 */
export interface AppState {
  userInfo: string
  webSiteTitle: string
}

export const appGlobalModules: AppState = {
  userInfo: '',
  webSiteTitle: import.meta.env.VITE_SITE_TITLE
}
