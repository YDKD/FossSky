/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 10:19:25
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-21 16:52:12
 */
// class
import webCache from 'web-storage-cache'
import Cookise from '@/utils/cookies'

type StorageType = 'sessionStorage' | 'localStorage'
type CacheType = 'storage' | 'cookie'

interface CookiseType {
  setCookie: (key: string, value: string, time?: number | Date) => void
  getCookie: (param: string) => string | undefined
}

const cookieCache: CookiseType = Cookise

export const useCache = (cacheType: CacheType = 'storage') => {
  if (cacheType == 'storage') {
    const storage = (storageType: StorageType = 'sessionStorage'): webCache => {
      return new webCache({
        storage: storageType
      })
    }
    const storageCache = storage()
    // the reason is to for future expansion why export the object not use defalut
    return {
      storageCache
    }
  } else {
    return {
      cookieCache
    }
  }
}
