<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 10:32:17
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 16:07:29
-->
<template>
  <div ref="elRef" :class="[$attrs.class, prefixCls]" :style="styles"></div>
</template>

<script lang="ts" setup>
import {
  PropType,
  ref,
  watch,
  defineProps,
  computed,
  unref,
  onMounted,
  onBeforeUnmount,
  onActivated
} from 'vue'
import { isString } from '@/utils/is'
import { debounce } from 'lodash'
import { useDesign } from '@/hooks'
import echarts from '@/plugins/echarts'
import type { EChartsOption } from 'echarts'
import { propTypes } from '@/utils/propTypes'

const prefixCls = useDesign('prefix', 'echarts')
const variables = useDesign('variables')
let namespace: any
if (typeof variables != 'string') {
  namespace = variables.namespace
}

const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  width: propTypes.oneOfType([Number, String]).def(''),
  height: propTypes.oneOfType([Number, String]).def('500px')
})

const options = computed(() => {
  return Object.assign(props.options, {
    darkMode: 'auto'
  })
})

const elRef = ref<ElRef>()

let echartRef: Nullable<echarts.ECharts> = null

const contentEl = ref<Element>()

const styles = computed(() => {
  const width = isString(props.width) ? props.width : `${props.width}px`
  const height = isString(props.height) ? props.height : `${props.height}px`

  return {
    width,
    height
  }
})

const initChart = () => {
  if (unref(elRef) && props.options) {
    echartRef = echarts.init(unref(elRef) as HTMLElement)
    echartRef?.setOption(unref(options))
  }
}

watch(
  () => options.value,
  (options) => {
    if (echartRef) {
      echartRef?.setOption(options)
    }
  },
  {
    deep: true
  }
)

const resizeHandler = debounce(() => {
  if (echartRef) {
    echartRef.resize()
  }
}, 100)

const contentResizeHandler = async (e: TransitionEvent) => {
  if (e.propertyName === 'transform') {
    resizeHandler()
  }
}

onMounted(() => {
  initChart()

  window.addEventListener('resize', resizeHandler)

  contentEl.value = document.getElementsByClassName(`${namespace}-container`)[0]
  unref(contentEl) &&
    (unref(contentEl) as HTMLElement).addEventListener(
      'transitionend',
      contentResizeHandler
    )
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  unref(contentEl) &&
    (unref(contentEl) as HTMLElement).removeEventListener(
      'transitionend',
      contentResizeHandler
    )
})

onActivated(() => {
  if (echartRef) {
    echartRef.resize()
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-echarts';

.@{prefix-cls} {
}
</style>
