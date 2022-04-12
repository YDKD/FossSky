<!--
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 11:26:09
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 15:53:37
-->
<script lang="tsx">
import { useDesign } from '@/hooks'
import { defineComponent } from 'vue'

const prefixCls = useDesign('prefix', 'tab-menu')
const variables = useDesign('variables')

export default defineComponent({
  name: 'TabMenu',
  setup() {
    return () => <div id="zs" class={[prefixCls]}></div>
  }
})
</script>
