/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 13:56:26
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-04 14:01:46
 */
import type { Plugin } from 'vite'
// Element-Plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export default function autoImport(plugins?: Plugin[]) {
  return [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'pinia'],
      dts: 'types/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'],
      // avoid duplicate name components
      directoryAsNamespace: true,
      dts: 'types/components.d.ts'
    }),
    ElementPlus()
  ]
}
