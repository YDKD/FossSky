/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 13:39:38
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-08 11:37:26
 */
import generateEnv from './utils/generateEnv'
generateEnv()

const server = {
  port: 3000,
  hmr: true,
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
