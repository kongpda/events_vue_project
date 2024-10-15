export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('pages:extend', (pages) => {
        // Your custom routes
        pages.push({
            name: 'about',
            path: '/about',
            file: '~/pages/about.vue',
        })
        pages.push({
            name: 'signup',
            path: '/signup',
            file: '~/pages/signup.vue',
        })
        pages.push({
            name: 'login',
            path: '/login',
            file: '~/pages/login.vue',
        })
        pages.push({
            name: 'home',
            path: '/',
            file: '~/pages/index.vue',
        })
        pages.push({
            name: 'post',
            path: '/posts/:id',
            file: '~/pages/posts/[id].vue',
        })
        pages.push({
            name: 'event',
            path: '/event',
            file: '~/pages/event.vue',
        })
        pages.push({
            name: 'explorer',
            path: '/explorer',
            file: '~/pages/explorer.vue',
        })
        pages.push({
            name: 'contact',
            path: '/contact',
            file: '~/pages/contact.vue',
        })
    })
})
