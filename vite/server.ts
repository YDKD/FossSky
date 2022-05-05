/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 13:39:38
 * @LastEditors: YDKD
 * @LastEditTime: 2022-05-05 18:49:30
 */
import generateEnv from './utils/generateEnv'
generateEnv()

const server = {
  port: 3000,
  hmr: true,
  host: '0.0.0.0',
  proxy: {
    '/home': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/home/, '/home')
    },
    '/user': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/user/, '/user')
    },
    '/sys': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/sys/, '/sys')
    },
    '/analysis': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/analysis/, '/analysis')
    }
  }
}

export default server
