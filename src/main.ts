import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import 'virtual:windi.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale : 'en',
  messages
})

createApp(App).use(i18n).mount('#app')
