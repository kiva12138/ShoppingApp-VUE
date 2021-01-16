import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainPage from '@/components/Recommend/Recommend.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: MainPage,
        },
    ]
})
