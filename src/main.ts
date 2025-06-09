import { createApp } from 'vue'
import App from './App.vue'
import scrollAnimate from './entry'


const app = createApp(App)

app.use(scrollAnimate)

app.mount('#app')
