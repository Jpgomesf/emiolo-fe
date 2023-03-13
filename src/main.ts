import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.use(vue3GoogleLogin, {
  clientId: '676147118886-me83cve6qqnrnfvd5h11hfj1o20v5bvk.apps.googleusercontent.com'
})

app.use(router)

app.mount('#app')
