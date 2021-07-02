import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {auth} from '@/store/modules/auth'
import {Theme} from "@/api/theme";
const config = require('@/config')

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        host: config.host,
        port: config.port || '3000',
        protocol: config.protocol || 'http',
        apiAdminPanel: '/api/admin_panel/',
        theme: 'dark',
        errors: []
    },
    getters: {
        baseURL: state => {
            return state.protocol + '://' + state.host + ':' + state.port
        },
        apiAdminPanel: state => {
            return state.protocol + '://' + state.host + ':' + state.port + state.apiAdminPanel
        },
        isError: state => {
            return Boolean(state.errors.length)
        },
        themeColor: state => {
            return state.theme.startsWith('dark')
        },
        backgroundStyle: state => {
            let background = (state.theme === 'dark') ? 'black': `url(${require('@/assets/background/' + state.theme)})`
            return {background: background + 'no-repeat center / cover'}

        }
    },
    actions: {
        saveUserTheme({getters, state}){
            new Theme(getters.baseURL).updateItem(state.theme)
        },
        setUserTheme({commit}, theme){
            commit('setBackgroundImage', theme)
        },
        setError({commit}, error){
            commit('setError', error)
        },
        dropError({commit}){
            commit('dropError')
        }
    },
    mutations: {
        setError(state, error){
            state.errors = state.errors.concat(error)
        },
        dropError(state) {
            state.errors = []
        },
        setBackgroundImage(state, url) {
            state.theme = url
        }
    },
    modules: {
        auth: auth
    },
    plugins: [new VuexPersistence({key: 'vuex', storage: window.localStorage}).plugin]
})