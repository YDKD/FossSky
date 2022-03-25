/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-25 11:28:59
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-25 14:15:44
 */
import { useCache } from './useCache'

export const useClear = (): void => {
  const sessionStorageCache = useCache('storage', 'sessionStorage')
  const localStorageCache = useCache('storage', 'localStorage')
  const cookieCache = useCache('cookie')

  sessionStorageCache.storageCache?.clear()
  localStorageCache.storageCache?.clear()

  cookieCache.cookieCache?.clearCookie()
}
