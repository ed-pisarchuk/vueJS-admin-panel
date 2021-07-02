import {BaseApiService} from '@/api/BaseApiService'

export class Theme extends BaseApiService {
    updateItem(theme) {
        return this.prepareResult(this.getApiClient('updateUserTheme', {theme: theme}))
            .catch(error => {if (error[0].code === 401) return this.reAuth()})
            .then(() => {return this.prepareResult(this.getApiClient('updateUserTheme', {theme: theme}))})
    }
}