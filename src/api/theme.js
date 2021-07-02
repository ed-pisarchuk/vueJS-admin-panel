import {BaseApiService} from '@/utils/BaseApiService'

export class Theme extends BaseApiService {
    updateItem(theme) {
        return this.__request('updateUserTheme', {theme: theme})
    }
}