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
    plugins: [...setupPlugins()]
  }
})
