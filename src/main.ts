import './assets/main.css'
import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { markRaw } from 'vue'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const i18n = createI18n({
  globalInjection: true,
  // fallbackLocale: 'en',
  legacy: false
})
createApp({
  render: () => h(App)
})
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')
