<template>
  <div>
    <v-container class="px-0" fluid>
      <v-switch
          @change="settingMobileUpdate"
          label="Мобильный пропуск"
          v-model="switchData.isVisiblePass"
      ></v-switch>
      <v-switch
          @change="settingMobileUpdate"
          label="Командировки"
          v-model="switchData.isVisibleBusinessTrips"
      ></v-switch>
      <v-switch
          @change="settingMobileUpdate"
          label="Справки"
          v-model="switchData.isVisibleCertificates"
      ></v-switch>
      <v-switch
          @change="settingMobileUpdate"
          label="HR Консультации"
          v-model="switchData.isVisibleHrConsultations"
      ></v-switch>
      <v-switch
          @change="settingMobileUpdate"
          label="Бронирование рабочих мест"
          v-model="switchData.isVisibleWorkplaceBooking"
      ></v-switch>
    </v-container>
  </div>
</template>

<script>
import {AdminService} from '@/api/admin'

export default {
  name: "AdminSettings",
  data: () => ({
    service: new AdminService(),
    switchData: {
      isVisiblePass: false,
      isVisibleBusinessTrips: false,
      isVisibleCertificates: false,
      isVisibleWorkplaceBooking: false,
      isVisibleHrConsultations: false
    }
  }),
  created() {
    this.getSetttingMobile()
  },

  methods: {
    getSetttingMobile() {
      this.service.getMobileSettings()
          .then(res => {
            this.switchData = res.data
          })
          .catch(error => {
            this.$store.dispatch('setError', error)
          })
    },

    settingMobileUpdate() {
      this.service.changeMobileSettings({switchData: this.switchData})
          .catch(error => {
            this.$store.dispatch('setError', error)
          })
    }
  },
}
</script>

<style scoped>

</style>
