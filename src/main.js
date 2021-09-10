import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Api from './services/api'
import './style/index.css'
import './registerServiceWorker'

const app = createApp(App)
app.use(router).use(router).mount('#app')
app.use(Api)
