import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { store, setupStore } from './store'

import globalRegister from './global'
const app = createApp(App)

app.use(globalRegister)
// register router
app.use(router)
// register store
app.use(store)
// setup store
setupStore()

app.mount('#app')
