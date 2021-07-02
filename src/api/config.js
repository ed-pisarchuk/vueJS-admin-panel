export const BACKEND_ENDPOINTS = {
    createToken: {method: 'post', url: '/auth/login'},
    getUserData: {method: 'get', url: '/api/users/me'},
    refreshToken: {method: 'post', url: '/auth/refresh'},
    updateUserTheme: {method: 'post', url: '/api/admin-panel'},
    getUlinks: {method: 'get', url: '/api/admin-panel/ulinks'},
    checkAuth: {method: 'get', url: '/auth/check'}
}