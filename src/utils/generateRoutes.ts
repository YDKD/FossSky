/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-23 11:00:44
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 15:44:36
 */
import Menu from '@/components/menu/index.vue'
import { RouteMeta, RouteRecordRaw } from 'vue-router'

// to dynamic import component
const modules = import.meta.glob('../views/**/*.{vue,tsx}')

import Layout from '@/views/layout/index.vue'

export const formatTree = (data: Array<RouteItem>) => {
  const parents = data.filter((p) => p.pid == 0),
    children = data.filter((c) => c.pid != 0)

  dataToTree(parents, children)

  function dataToTree(parents: Array<RouteItem>, children: Array<RouteItem>) {
    parents.map((p: RouteItem) => {
      children.map((c: RouteItem, i: number) => {
        if (c.pid == p.id) {
          // 深拷贝一份children
          const _c = JSON.parse(JSON.stringify(children))
          // 切分子级，splice之后 _c 会变化
          _c.splice(i, 1)
          // 由于遍历是一个对象，所以需要加 []将其作为一个数组
          dataToTree([c], _c)

          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }
  return parents
}

// 路由转换
export const generateRouter = (
  userRouters: RouteItem[]
): CustomRouteRecordRaw[] => {
  const newRoutes = userRouters.map((r: RouteItem) => {
    const _routes: CustomRouteRecordRaw = {
      path: r.path,
      name: r.name,
      component: r.pid == 0 ? Layout : modules[`../views/${r.name}/index.vue`],
      meta: { title: r.title, icon: r.ico }
    }
    if (r.children) {
      _routes.children = generateRouter(r.children)
    }
    return _routes
  })
  return newRoutes
}
