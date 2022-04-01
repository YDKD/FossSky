import { defineConfig } from 'vite'
import { alias, server, generateEnv, setupPlugins } from './vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // generate env
  generateEnv(command)

  return {
    resolve: {
      alias: alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'md']
    },
    server: server,
    plugins: [...setupPlugins()],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/styles/variables.module.less";',
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: 'terser',
      outDir: 'dist',
      sourcemap: false,
      brotliSize: false
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'vue-types',
        'element-plus/es/locale/lang/zh-cn',
        'element-plus/es/locale/lang/en',
        '@iconify/iconify',
        '@vueuse/core',
        'axios'
      ]
    }
  }
})
