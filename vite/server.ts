/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-04 13:39:38
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-04 13:40:42
 */
const server = {
  port: 3000,
  proxy: {
    '/home': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/home/, '/home')
    }
  }
}

export default server