import {AuthService} from '@/api/auth'
import localforage from 'localforage'
export const auth = {
    namespaced: true,
    state: {
        user: {},
        loggedIn: false
    },
    actions: {
        checkAuth({commit, rootGetters}){
            new AuthService(rootGetters.baseURL).checkAuth().then(result => {
                if (!result.valid) {
                    commit('loginFailure')
                }
                return Promise.resolve(result)
            })
        },
        setError({commit}, error){
            commit('setError', error, {root: true})
        },
        async login({commit, rootGetters}, userData) {
            const service = new AuthService(rootGetters.baseURL)
            await service.createItem(userData)
            return service.getUser()
                .then(user => {
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
                    role: user.adminPanel.user_role
                }
                state.theme = user.adminPanel.theme
                state.loggedIn = true
            }
        },
        loginFailure(state) {
            state.user = {}
            state.loggedIn = false
        },
        logout(state) {
            state.user = {}
            state.loggedIn = false
        }
    }
};