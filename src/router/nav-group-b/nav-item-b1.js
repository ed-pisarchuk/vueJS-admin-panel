const Loader = require('@/utils/nav-loader')

module.exports =
    {
        path     : 'nav-item-b1',
        name     : 'Ссылки',
        component: new Loader().loadNavGroupB('Links'),
        meta: {
            requiresAuth : true,
            transitionName: 'slide'
        },
    }