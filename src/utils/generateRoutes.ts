/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-23 11:00:44
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-23 15:01:54
 */
import Menu from '@/components/menu/index.vue'
import { RouteRecordRaw } from 'vue-router'

// to dynamic import component
const modules = import.meta.glob('../views/**/*.{vue,tsx}')

export interface RouteItem {
  id: number
  pid: number
  path: string
  link: string
  title: string
  ico: string
  default_check: number
  children?: Array<RouteItem>
}

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
export const generateRouter = (userRouters: any): RouteRecordRaw[] => {
  const newRoutes = userRouters.map((r: any) => {
    let routes: RouteRecordRaw
    if (!r.children) {
      routes = {
        path: r.path,
        name: r.name,
        component: modules[`../views/${r.name}/index.vue`],
        meta: { title: r.title, icon: r.ico }
      }
      return routes
    }

    if (r.children) {
      routes = {
        path: r.path,
        name: r.name,
        component: Menu,
        meta: { title: r.title, icon: r.ico }
      }
      routes.children = generateRouter(r.children)
      return routes
    }
  })
  return newRoutes
}
