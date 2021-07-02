import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
const NavLoader = require('@/utils/nav-loader')
const Loader = new NavLoader()
const NavGroupB = require('@/router/nav-group-b')
const NavGroupA = require('@/router/nav-group-a')

Vue.use(VueRouter)

const routes = [
    {
        name: 'Главная',
        path: '/',
        component: Loader.loadBase('Layout'),
        children: [].concat(NavGroupA, NavGroupB),
        meta: {
            requiresAuth: true,
            permissionDeniedFor: ['guest'],
            icon: 'mdi_home'
        }
    },
    {
        path: '/login',
        component: Loader.loadBase('Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.state.auth.loggedIn) {
            store.dispatch('auth/checkAuth').then(() => {
                if (!store.state.auth.loggedIn) {
                    next('/login')
                }
                let role = store.state.auth.user.role || 'guest'
                for (let route of to.matched) {
                    if (route.meta.permissionDeniedFor && route.meta.permissionDeniedFor.includes(role)) {
                        next('/')
                    }
                }
            })
        } else {
            next('/login')
        }
    }
    next()
})

export default router
