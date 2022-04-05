/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:25:58
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-04 20:21:07
 */
import router from '@/router'

export const edit = (row: Person) => {
  router.push({ path: '/edit/person', query: { name: row.name } })
}

export const addPerson = () => {
  router.push({ path: '/add/person' })
}
