import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'
import Paginate from 'vuejs-paginate'

const app = createApp(App);

app
    .component('Paginate', Paginate)

app
    .use(store)
    .use(router)
    .mount('#app')
