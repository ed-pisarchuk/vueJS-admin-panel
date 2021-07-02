export const BACKEND_ENDPOINTS = {
    createToken: {method: 'post', url: '/auth/login'},
    getUserData: {method: 'get', url: '/api/user/me'},
    refreshToken: {method: 'post', url: '/auth/refresh'},
    updateUserTheme: {method: 'post', url: '/api/admin-panel/theme'},
    getUlinks: {method: 'get', url: '/api/admin-panel/ulinks'}
}