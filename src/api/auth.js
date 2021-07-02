import {BaseApiService} from '@/api/BaseApiService'

export class AuthService extends BaseApiService {

    prepareResult(result){
        return result.then(res => {
            return Promise.resolve(res.data.items[0])
        })
    }

    createItem(userData) {
        return this.prepareResult(this.getApiClient('createToken', userData)).then(tokens => {
            return this.storeTokens(tokens)
        })
    }

    updateItem() {
        return this.prepareResult(this.getApiClient('refreshToken'))
    }

    getUser() {
        return this.prepareResult(this.getApiClient('getUserData'))
            .catch(error => {if (error[0].code === 401) return this.reAuth()})
            .then(() => {return this.prepareResult(this.getApiClient('getUserData'))})
    }
}