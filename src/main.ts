import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

// import global css
import '@/styles/index.less'

import './assets/css/index.less'
import './assets/css/tailwind.css'

import router from './router'
import { setupStore } from './store'

import { globalRegister } from './global'

import './permission'

const app = createApp(App)

app.use(globalRegister)
// register router
app.use(router)
// register store
setupStore(app)

app.mount('#app')
