import Vue from 'vue'
import VueRouter from 'vue-router'
import Links from "../views/Links";
import Main from "../views/Main";

// import store from '@/store'
const NavLoader = require('@/utils/nav-loader')
const Loader = new NavLoader()
const NavGroupB = require('@/router/contacts')
const NavGroupA = require('@/router/admin')

Vue.use(VueRouter)

const routes = [
    {
        name: 'Главная',
        path: '/',
        component: Loader.loadBase('Layout'),
        children: [{
            name: '',
            path: '/',
            component: Main,
            meta: {
                requiresAuth: true,
                icon: 'mdi_home'

            }
        },{
            path: 'ulinks',
            name: 'Полезные ссылки',
            component: Links,
            meta: {
                requiresAuth: true,
                transitionName: 'slide'
            }
        }].concat(NavGroupA, NavGroupB),
        meta: {
            requiresAuth: true,
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

/*router.beforeEach((to, from, next) => {
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
})*/

export default router
