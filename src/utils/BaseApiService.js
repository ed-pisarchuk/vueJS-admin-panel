import {BACKEND_ENDPOINTS} from "@/api/config";
import localforage from "localforage";
import axios from "axios";

export class BaseApiService {

    baseUrl
    endpoints

    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.endpoints = BACKEND_ENDPOINTS
        this
    }

    async getApiClient(endpoint, headers, data, params){
        let config = {
            url: this.baseUrl + this.endpoints[endpoint].url,
            method: this.endpoints[endpoint].method,
            timeout: 5000,
            data: data,
            params: params,
            headers: headers || {}
        }
        return axios(config)
    }

    getAuthHeader(type){
        return localforage.getItem(type || 'accessToken').then(token => {
            if (token) {
                return {'Authorization': `Bearer ${token}`}
            }
        })
    }

    storeTokens(tokens) {
        return Promise.all([
            localforage.setItem('accessToken', tokens.accessToken),
            localforage.setItem('refreshToken', tokens.refreshToken)
        ])
    }

    async checkAuth(){
        return this.prepareResult(this.getApiClient('checkAuth', await this.getAuthHeader()))
            .then(result=>{return Promise.resolve(result[0])})
    }

    async reAuth() {
        return this.prepareResult(this.getApiClient('refreshToken', await this.getAuthHeader('refreshToken')))
            .then(tokens => {
                return this.storeTokens(tokens[0])
            })
    }

    prepareResult(result) {
        return result.then(res => {
            return Promise.resolve(res.data.items)
        }).catch(error => {
            return Promise.reject(error.response.data.errors)
        })
    }

    async __request(reqName, data, params) {
        return this.prepareResult(this.getApiClient(reqName, await this.getAuthHeader(), data, params))
            .catch(async error => {
                if (error[0].code === 401) {
                    await this.reAuth()
                    return this.prepareResult(this.getApiClient(reqName, await this.getAuthHeader(), data, params))
                }
                return Promise.reject(error.response.data.errors)
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