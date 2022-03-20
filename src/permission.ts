/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:41:57
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 10:02:43
 */
import { useNProgress, useTitle } from './hooks/web'
import router from './router'

const { start, done } = useNProgress()

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
