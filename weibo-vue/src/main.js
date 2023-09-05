import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TinyVue from '@opentiny/vue'
import store from './store'
import './style.css'

createApp(App)
  .use(router)
  .use(TinyVue)
  .use(store)
  .mount('#app')
