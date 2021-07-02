import {BaseApiService} from '@/utils/BaseApiService'

export class UlinksService extends BaseApiService {
    getList() {
        return this.__request('getUlinks')
    }
}