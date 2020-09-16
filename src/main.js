import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import bootstrap from 'bootstrap'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAXn-mWeZ4j62QgNhQ97JaNGoiMHAW9SnE',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
   
      //// If you want to set the version, you can do so:
      // v: '3.26',
    },})

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

