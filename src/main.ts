import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const gid = import.meta.env.VITE_MY_ENV_VARIABLE;

const app = createApp(App)

app.use(createPinia())

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_ID as string,
})

app.use(router)

app.mount('#app')