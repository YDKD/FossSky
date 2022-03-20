/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 10:19:25
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 10:25:59
 */
// class
import webCache from 'web-storage-cache'

type CacheType = 'sessionStorage' | 'localStorage'

export const useCache = (cacheType: CacheType = 'sessionStorage') => {
  const storageCache = new webCache({
    storage: cacheType
  })

  // the reason is to for future expansion why export the object not use defalut
  return {
    storageCache
  }
}
