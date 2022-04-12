/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-11 09:27:50
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 17:03:38
 */
import { getLeavingPerson } from '@/api/getApi'
import { useAnalysisStore } from '@/store/modules/analysis'
import { EChartsOption } from 'echarts'
import { set } from 'lodash'
import { ref, reactive } from 'vue'
import { pipeOptions } from '../echart-options'

const loading = ref(false)
const nameMapping = {
  total_leaving: '今日请假人数',
  total_sick_leaving: '病假',
  total_year_leaving: '年假',
  total_absence_leaving: '事假',
  current_day_colock_people: '今日出勤'
}

const pipeOptionsData = reactive<EChartsOption>(pipeOptions) as EChartsOption

const analysisStore = useAnalysisStore()

const getInitPipeData = async () => {
  const { data } = await getLeavingPerson()
  const { result } = await data
  const pipData = []
  for (const key in result) {
    pipData.push({
      value: result[key],
      name: (<MapStringKey>nameMapping)[key]
    })
  }
  set(pipeOptionsData, 'series[0].data', pipData)

  // set count value
  analysisStore.setCurrentDayColockPeople(result['current_day_colock_people'])
  analysisStore.setTotalLeaving(result['total_leaving'])
}

export { loading as pipeLoading, pipeOptionsData, getInitPipeData }
