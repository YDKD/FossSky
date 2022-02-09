import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// Element-Plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// env
import { generateEnv } from './src/utils/index'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // generate env
  generateEnv(command)

  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        },
        {
          find: 'components',
          replacement: path.resolve(__dirname, 'src/components')
        },
        {
          find: 'store',
          replacement: path.resolve(__dirname, 'src/store')
        }
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'md']
    },
    server: {
      port: 3000,
      proxy: {
        '/home': {
          target: process.env.VITE_REQUEST_URL,
          changeOrigin: true,
          rewrite: (p: string) => p.replace(/^\/home/, '/home')
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      ElementPlus()
    ]
  }
})
