import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from './autoImport'

export default function setupPlugins() {
  const plugins: Plugin[] = [vue(), vueJsx()]
  return [...plugins, ...autoImport()]
}
