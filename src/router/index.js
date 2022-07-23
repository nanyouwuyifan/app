import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/search/:keyword?",
            component:Search
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})