import {BACKEND_ENDPOINTS} from "@/api/config";
import localforage from "localforage";
import axios from "axios";

export class BaseApiService {

    baseUrl
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.endpoints = BACKEND_ENDPOINTS
    }

    async getApiClient(endpoint, data, params){
        let config = {
            url: this.baseUrl + this.endpoints[endpoint].url,
            method: this.endpoints[endpoint].method,
            timeout: 5000,
            data: data,
            params: params
        }

        let tokenType = (endpoint === 'refreshToken') ? endpoint : 'accessToken'

        await localforage.getItem(tokenType).then(token => {
            if (token) {
                config.headers = {'Authorization': `Bearer ${token}`}
            }
        })
        return axios(config)
    }

    prepareResult(result){
        return result.then(res => {
            alert(JSON.stringify(res.data))
            return Promise.resolve(res.data.items)
        })
    }

    storeTokens(tokens) {
        return Promise.all([
            localforage.setItem('accessToken', tokens.accessToken),
            localforage.setItem('refreshToken', tokens.refreshToken)
        ])
    }

    reAuth() {
        return this.prepareResult(this.getApiClient('refreshToken')).then(tokens => {
            return this.storeTokens(tokens)
        })
    }

    createItem() {
        return Promise.reject({title: 'Object not supported method', code: 405})
    }

    updateItem() {
        return Promise.reject({title: 'Object not supported method', code: 405})
    }

    destroyItem() {
        return Promise.reject({title: 'Object not supported method', code: 405})
    }

    getById() {
        return Promise.reject({title: 'Object not supported method', code: 405})
    }

    getList() {
        return Promise.reject({title: 'Object not supported method', code: 405})
    }
}