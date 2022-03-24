<script lang="tsx">
import { defineComponent } from 'vue'
import { useDesign } from '@/hooks'
const prefixCls = useDesign('prefix', 'container')

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class={prefixCls}>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </div>
    )
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-container';

.@{prefix-cls} {
}
</style>
