import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'

// Bootstrap
import '@/assets/reset.css'
import '@/assets/index.css' 
import '@/assets/style.css'

createApp(App)  
  .use(router)
  .mount('#app')
