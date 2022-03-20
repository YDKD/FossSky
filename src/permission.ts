/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:41:57
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 10:24:35
 */
import { useNProgress, useTitle, useCache } from './hooks'
import router from './router'
import { useAppStoreWithOut } from './store/modules/app'

const { start, done } = useNProgress()
const appStore = useAppStoreWithOut()
const { storageCache } = useCache()

const whiteRouteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  start()

  if (whiteRouteList.includes(to.path)) {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
  }
})

// handle router after
router.afterEach((to) => {
  useTitle(to?.meta?.title as string)
  done()
})
