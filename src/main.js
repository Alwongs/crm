import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import './assets/styles.scss'

createApp(App).component('Paginate', Paginate).use(store).use(router).mount('#app')
