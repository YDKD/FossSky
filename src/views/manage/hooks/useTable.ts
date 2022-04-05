/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-01 15:25:58
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 15:34:43
 */
import { ref } from 'vue'
import router from '@/router'

import { getPersonList } from '@/api/getApi'
import { deletePersonInfo } from '@/api/deleteApi'
import { useMessageBox, useTips } from '@/hooks'

const tableData = ref([])
const getInitData = async () => {
  const { data } = await getPersonList()
  if (data.code == 200) {
    tableData.value = data.result
  }
}

const editPerson = (row: Person) => {
  router.push({ path: '/edit/person', query: { name: row.name } })
}

const addPerson = () => {
  router.push({ path: '/add/person' })
}

const deletePerson = async (row: Person) => {
  const flag = await useMessageBox({
    tips: '是否删除该职工信息',
    needTips: false
  })
  if (flag) {
    const params = {
      id: row.id
    }
    const { code, msg } = await deletePersonInfo(params)
    await useTips(code, msg)
    await getInitData()
  }
}

export { tableData, getInitData, addPerson, editPerson, deletePerson }
