<script lang="tsx">
import { defineComponent } from 'vue'
import { useDesign } from '@/hooks'
import { useAppStore } from '@/store/modules/app'

// layout
import { Logo } from '@/components/Logo'

const prefixCls = useDesign('prefix', 'container')

const appStore = useAppStore()

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class={prefixCls}>
        <el-container class={['h-full']}>
          <el-aside width="200px" class={['bg-menu-bg', 'h100']}>
            <div class={['h-[calc(var(--logo-height)-10px)]']}>
              <Logo />
            </div>
          </el-aside>
          <el-container>
            <el-header class={['flex', 'items-center']}>Header</el-header>
            <el-main class={['bg-container-bg']}>
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
  height: 100%;
}
</style>
