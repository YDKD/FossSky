/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-08 13:53:40
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 09:43:38
 */
import type { EChartsOption } from 'echarts'
import moment from 'moment'

export const lineOptions: EChartsOption = {
  title: {
    text: 'join workers',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]
}

export const pipeOptions: EChartsOption = {
  title: {
    text: 'Attendance Pip',
    subtext: moment().format('L'),
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { value: 3, name: 'Search Engine' },
        { value: 2, name: 'Direct' },
        { value: 0, name: 'Email' },
        { value: 0, name: 'Union Ads' },
        { value: 0, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
