<script lang="tsx">
import { defineComponent } from 'vue'
import { useDesign } from '@/hooks'
import { useAppStore } from '@/store/modules/app'

// layout
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'

const prefixCls = useDesign('prefix', 'container')

const appStore = useAppStore()

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class={prefixCls}>
        <el-container class={['h-full']}>
          <el-aside width="200px" class={['aside-bg h-full']}>
            <Logo />
          </el-aside>
          <el-container>
            <el-header>
              <Header />
            </el-header>
            <el-main class={['container-bg']}>
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
  .aside-bg {
    background-color: var(--left-menu-bg-color);
  }
  .container-bg {
    background-color: var(--app-contnet-bg-color);
  }
}
</style>
