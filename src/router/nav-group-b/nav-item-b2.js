const Loader = require('@/utils/nav-loader')

module.exports =
    {
        path: 'nav-item-b2',
        name: 'Офис',
        component: new Loader().loadNavGroupB('Office'),
        meta: {
            requiresAuth: true,
            transitionName: 'slide'
        },
    }