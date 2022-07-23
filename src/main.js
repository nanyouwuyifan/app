import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
// import {reqCategory} from '@/api'
import store from "@/store"
import '@/mock/mockServe'
Vue.config.productionTip = false
// reqCategory()
Vue.component(TypeNav.name,TypeNav) //组件名字，哪个组件
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
