const Loader = require('@/utils/nav-loader')

module.exports =
    {
        path: 'contacts',
        name: 'Контакты',
        component: (new Loader()).loadNavGroupB('Base'),
        children: [],
        meta: {
            requiresAuth: true,
            transitionName: 'slide'
        },
    }