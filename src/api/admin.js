import {BaseApiService} from '@/utils/BaseApiService'

export class AdminService extends BaseApiService {
    getMobileSettings() {
        return Promise.resolve({
            data: {
                isVisiblePass: false,
                isVisibleBusinessTrips: true,
                isVisibleCertificates: false,
                isVisibleWorkplaceBooking: true,
                isVisibleHrConsultations: true
            }
        })
    }
    changeMobileSettings() {
        return Promise.resolve({successful: true})
    }
}