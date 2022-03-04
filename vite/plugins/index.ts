import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from './autoImport'

export default function setupPlugins() {
  const plugins: Plugin[] = [vue()]
  return [...plugins, ...autoImport()]
}
