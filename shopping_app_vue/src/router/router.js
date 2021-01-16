import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from '@/components/Recommend/Recommend.vue'
import Classify from '@/components/Classification/Classify.vue'
import Cart from '@/components/ShoppingCart/Shopping.vue'
import Person from '@/components/Person/Person.vue'

export default new Router({
    routes: [
        {
            path: '*',
            name: 'not_found',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend,
        },
        {
            path: '/classify',
            name: 'classify',
            component: Classify,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/person',
            name: 'person',
            component: Person,
        },
    ]
})
