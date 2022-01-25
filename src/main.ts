import { createApp } from 'vue'
import App from './App.vue'

// import 'element-plus/dist/index.css'

import router from './router'
import { store, setupStore } from './store'

const app = createApp(App)

// register router
app.use(router)
// register store
app.use(store)
// setup store
setupStore()

app.mount('#app')
