import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './registerServiceWorker'

createApp(App).use(router).use(router).mount('#app')
