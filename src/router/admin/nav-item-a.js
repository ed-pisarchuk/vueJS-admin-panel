const Loader = require('@/utils/nav-loader')

module.exports =
    {
        path     : 'nav-item-a',
        name     : 'NavItemA',
        component: new Loader().loadNavGroupA('NavItemA'),
        meta: {
            requiresAuth: true,
            transitionName: 'slide',
            permissions: [
                {
                    role: "admin",
                    access: false,
                    redirect: "login"
                }
            ]
        }
    }