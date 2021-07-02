import {AuthService} from '@/api/auth'
import localforage from 'localforage'
export const auth = {
    namespaced: true,
    state: {
        user: {},
        loggedIn: false
    },
    actions: {
        setError({commit}, error){
            commit('setError', error, {root: true})
        },
        async login({commit, rootGetters}, userData) {
            const service = new AuthService(rootGetters.baseURL)
            await service.createItem(userData)
            return service.getUser()
                .then(async user => {
                    commit('loginSuccess', user)
                    return Promise.resolve(user)
                })
                .catch(error => {
                    commit('loginFailure')
                    return Promise.reject(error)
                })
        },
        logout({commit}) {
            localforage.clear()
            commit('logout')
        }
    },
    mutations: {
        loginSuccess(state, user) {
            if (user.adminPanel) {
                state.user = {
                    role: user.adminPanel.user_role,
                    theme: user.adminPanel.theme
                }
                state.loggedIn = true
            }
        },
        loginFailure(/*state*/) {
            this.reset()
            /*state.user = {}
            state.loggedIn = false*/
        },
        logout(/*state*/) {
            this.reset()
            /*state.user = {}
            state.loggedIn = false*/
        }
    }
};