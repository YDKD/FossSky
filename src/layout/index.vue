<script lang="tsx">
import { defineComponent, Transition } from 'vue'
import { useDesign } from '@/hooks'
import { useAppStore } from '@/store/modules/app'

// layout
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import AppView from './AppView.vue'
import { RouterView } from 'vue-router'

const prefixCls = useDesign('prefix', 'container')

const appStore = useAppStore()

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class={prefixCls}>
        <el-container class={['h-full']}>
          <el-aside width="200px" class={['aside-bg h-full']}>
            {/* Logo part */}
            <Logo />
            {/* Menu part */}
            <Menu class="!h-[calc(100%-var(--logo-height))]" />
          </el-aside>
          <el-container>
            <el-header class="!h-[var(--logo-height)]">
              {/* Header part */}
              <Header />
            </el-header>
            <el-main class={['container-bg']}>
              <AppView />
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
