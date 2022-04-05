/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:25:58
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 13:54:32
 */
import router from '@/router'

export const editPerson = (row: Person) => {
  router.push({ path: '/edit/person', query: { name: row.name } })
}

export const addPerson = () => {
  router.push({ path: '/add/person' })
}
