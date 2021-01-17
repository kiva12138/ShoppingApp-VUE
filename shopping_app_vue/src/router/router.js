import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from '@/components/Recommend/Recommend.vue'
import Classify from '@/components/Classification/Classify.vue'
import Cart from '@/components/ShoppingCart/Shopping.vue'
import Person from '@/components/Person/Person.vue'

import Sale from '@/components/Recommend/sale.vue'
import Digital from '@/components/Recommend/digital.vue'
import Jewl from '@/components/Recommend/jewl.vue'

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
            children: [
                {
                    path: '/recommend/sale',
                    name: 'sale',
                    component: Sale,
                },
                {
                    path: '/recommend/digital',
                    name: 'digital',
                    component: Digital,
                },
                {
                    path: '/recommend/jewl',
                    name: 'jewl',
                    component: Jewl,
                }
            ]
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
