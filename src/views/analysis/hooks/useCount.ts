/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-11 16:50:55
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 09:35:40
 */
import { getCountTotal } from '@/api/getApi'
import { useAnalysisStore } from '@/store/modules/analysis'
import { ref } from 'vue'

interface Item {
  label: string
  value: number
  class: string
  icon: string
}

const countLoading = ref(true)

const analysisStore = useAnalysisStore()

const getCountTotalData = async () => {
  const { data } = await getCountTotal()
  const { result } = await data
  if (result) {
    analysisStore.setTotalSystemDevelopers(result['total_system_developers'])
    analysisStore.setTotalWorkers(result['total_workers'])
  }
}

const countData = ref<Item[]>([])

const setCountValue = () => {
  return new Promise((resolve, reject) => {
    resolve(
      (countData.value = [
        {
          label: '职工总数',
          value: analysisStore.getTotalWorkers,
          class: 'total_workers',
          icon: 'icon-suoyourenyuan'
        },
        {
          label: '系统人员总数总数',
          value: analysisStore.getTotalSystemDevelopers,
          class: 'total_developers',
          icon: 'icon-guanliyuan'
        },
        {
          label: '当日请假人数',
          value: analysisStore.getTotalLeaving,
          class: 'total_leaving',
          icon: 'icon-qingjia'
        },
        {
          label: '当日出勤人数',
          value: analysisStore.getCurrentDayColockPeople,
          class: 'total_colock',
          icon: 'icon-chuqin'
        }
      ])
    )
  })
}

export { getCountTotalData, setCountValue, countData, countLoading }
