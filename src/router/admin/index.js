const Loader = require('@/utils/nav-loader')
const NavItemA = require('@/router/admin/nav-item-a')

module.exports =
    {
        path: 'admin',
        name: 'Настройки МП',
        component: (new Loader()).loadNavGroupA('Base'),
        children: [NavItemA],
        meta: {
            requiresAuth: true,
            transitionName: 'slide',
            permissionDeniedFor: ['guest']
        },
    }