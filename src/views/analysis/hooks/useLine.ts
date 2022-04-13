/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-08 16:19:17
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 09:47:38
 */
import { getAddPerson } from '@/api/getApi'
import { lineOptions } from '../echart-options'
import { reactive, ref } from 'vue'
import { EChartsOption } from 'echarts'
import { set } from 'lodash'

interface Item {
  days: string
  count: number
}

const loading = ref(true)

const total = ref(0)
const count_month = ref('01')

const lineOptionsData = reactive<EChartsOption>(lineOptions) as EChartsOption

const getInitLineData = async () => {
  const { data } = await getAddPerson()
  const { code, result } = await data
  if (code == 200) {
    const days: string[] = []
    const counts: number[] = []
    result.map((item: Item) => {
      days.push(item.days)
      counts.push(item.count)
    })

    // set data
    set(lineOptionsData, 'xAxis.data', days)
    set(lineOptionsData, 'series', [
      {
        data: counts,
        type: 'line',
        smooth: true
      }
    ])
    loading.value = false

    total.value = counts.reduce((pre, curr) => pre + curr, 0)
    count_month.value = days[0].split('/')[1]
  }
}

export {
  loading as lineLoading,
  lineOptionsData,
  getInitLineData,
  total,
  count_month
}
