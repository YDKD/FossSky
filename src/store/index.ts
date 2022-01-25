import { createPinia } from 'pinia'
import { setupUser } from './modules/user'

export const store = createPinia()

export function setupStore() {
  setupUser()
}
