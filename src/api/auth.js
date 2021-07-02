import {BaseApiService} from '@/utils/BaseApiService'

export class AuthService extends BaseApiService {

    createItem(userData) {
        return this.prepareResult(this.getApiClient('createToken', {}, userData))
            .then(tokens => {
                return this.storeTokens(tokens[0])
            })
    }

    getUser() {
        return this.__request('getUserData').then(result=>{
            return Promise.resolve(result[0])})
    }
}