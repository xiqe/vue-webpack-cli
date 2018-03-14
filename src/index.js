import 'es6-promise/auto'

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './vuex/store'
import App from './app'

Vue.use(VueRouter);
Vue.prototype.$http = axios;

import index from './view/index/index.vue'

const _routes = [
    {
        path: '/index',
        name:'index',
        component: index
    },
    {
        path: '*',
        redirect: '/index'
    }
];

const router = new VueRouter({
    routes:_routes
})

const app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
}).$mount('#app')
