import Vue from 'vue';
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.css'
import '../src/assets/scss/style.scss'


Vue.config.productionTip = false

import { routes } from './router.js'

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

