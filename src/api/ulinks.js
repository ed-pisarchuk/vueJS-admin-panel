import {BaseApiService} from '@/api/BaseApiService'

export class UlinksService extends BaseApiService {
    getList() {
        return this.prepareResult(this.getApiClient('getUlinks'))
            .catch(error => {
                alert(JSON.stringify(error.response))
                if (error[0].code === 401) {

                    return this.reAuth().then(() => {
                        return this.prepareResult(this.getApiClient('getUlinks'))
                    })
                }
            })
    }
}