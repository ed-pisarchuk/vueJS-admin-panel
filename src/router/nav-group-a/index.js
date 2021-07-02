const Loader = require('@/utils/nav-loader')
const NavItemA = require('@/router/nav-group-a/nav-item-a')

module.exports =
    {
        path: 'nav-group-a',
        name: 'Админам вход запрещен',
        component: (new Loader()).loadNavGroupA('Base'),
        children: [NavItemA],
        meta: {
            requiresAuth: true,
            transitionName: 'slide',
            permissionDeniedFor: ['admin']
        },
    }