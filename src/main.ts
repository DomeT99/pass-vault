import { createApp } from 'vue'
import App from './App.vue'
/**Router */
import router from './router'

/**CSS*/
import './assets/scss/global.scss'
createApp(App).use(router).mount('#app')
