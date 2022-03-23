/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:41:57
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-23 15:00:34
 */
import { getRoutes } from './api/getApi'
import { useNProgress, useTitle, useCache } from './hooks'
import router from './router'
import { useAppStoreWithOut } from './store/modules/app'
import { usePermissionStoreWithOut } from './store/modules/permission'
import { formatTree, generateRouter } from './utils/generateRoutes'

const { start, done } = useNProgress()

const appStore = useAppStoreWithOut()

const permissionStore = usePermissionStoreWithOut()

const { storageCache } = useCache()

const whiteRouteList = ['/login', '/register', '/reset-pass']

router.beforeEach(async (to, from, next) => {
  start()
  if (storageCache?.get(appStore.userInfo)) {
    if (whiteRouteList.includes(to.path)) {
      // TO DO 如果是直接进入登录页，由于没有做首页，所以这个 if 判断有点问题
      next()
    } else {
      if (permissionStore.hasRoutes) {
        next()
        return
      }
      // get routes
      const { data } = await getRoutes()

      // generate routes
      const payload = formatTree(data)
      const routes = generateRouter(payload)

      // save routes
      permissionStore.addRoutes(routes)

      // add routes
      routes.forEach((route) => {
        router.addRoute(route)
      })

      // change status
      permissionStore.setIsAddRouters(true)

      // next
      const nextData = { ...to, replace: true }
      next(nextData)
    }
  } else if (whiteRouteList.includes(to.path)) {
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
