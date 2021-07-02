const NavItemB1 = require('@/router/nav-group-b/nav-item-b1')
const NavItemB2 = require('@/router/nav-group-b/nav-item-b2')
const Loader = require('@/utils/nav-loader')

module.exports =
    {
        path: 'nav-group-b',
        name: 'Контакты',
        component: (new Loader()).loadNavGroupB('Base'),
        children: [{
            path: '/',
            name: 'Контакты',
            component: (new Loader()).loadNavGroupB('Main')
        }].concat(NavItemB1, NavItemB2),
        meta: {
            requiresAuth: true,
            transitionName: 'slide'
        },
    }