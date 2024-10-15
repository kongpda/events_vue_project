import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Explorer from '../pages/explorer.vue'
import EventDetail from '../pages/event/[id].vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/explorer',
            name: 'explorer',
            component: Explorer,
        },
        // {
        //     path: '/event/:id',
        //     name: 'event',
        //     component: EventDetail,
        // },
    ],
})

export default router
