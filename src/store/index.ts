import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export const setupStore = (app: App<Element>) => {
  app.use(store)
}

// The export store and used in hooks are the same store
export { store }
