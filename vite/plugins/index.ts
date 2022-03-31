import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from './autoImport'
import PurgeIcons from 'vite-plugin-purge-icons'

export default function setupPlugins() {
  const plugins: Plugin[] = [vue(), vueJsx(), PurgeIcons()]
  return [...plugins, ...autoImport()]
}
