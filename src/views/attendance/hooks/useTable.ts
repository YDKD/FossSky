/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-07 17:14:45
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 17:44:22
 */

import { getWorkerAttendance } from '@/api/getApi'
import { ref, unref, computed } from 'vue'
import moment from 'moment'

const queryData = ref({
  search: '',
  page: 1,
  pageSize: 10
})

const tableData = ref([])
const total = ref(0)

const getInitData = async () => {
  const params = unref(queryData)
  const { data } = await getWorkerAttendance(params)
  tableData.value = data.result
  total.value = data.total
}

const record = {
  0: 'icon-icon-test',
  1: 'icon-zhengque'
}

const vacationType = {
  0: '出勤',
  1: '矿工',
  2: '病假',
  3: '休假',
  4: '事假',
  5: '其他'
}

const hideSinglePage = computed(() => total.value < queryData.value.pageSize)

const formatDate = (date: any) => {
  return moment(date).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
}

const callWithHandle = (filed: any, cb: any) => {
  if (filed) {
    return cb
  } else {
    return '-'
  }
}
export {
  getInitData,
  tableData,
  total,
  queryData,
  hideSinglePage,
  record,
  vacationType,
  formatDate,
  callWithHandle
}
