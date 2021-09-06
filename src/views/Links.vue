<template>
  <main>
      <v-treeview
          rounded
          hoverable
          activatable
          :items="items"
      >
        <template v-slot:label="{ item}">
          <a :href="item.link">{{ item.name }}</a>
        </template>
      </v-treeview>
  </main>
</template>

<script>
import {UlinksService} from "@/api/ulinks";

export default {
  name: "Links",

  components: {},
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications',
        children: [
          { id: 2, name: 'Сетевая модель OSI', link: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%82%D0%B5%D0%B2%D0%B0%D1%8F_%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C_OSI' },
          { id: 3, name: 'JWT : app', link: 'https://jwt.io/#debugger-io' },
          { id: 4, name: 'CORS', link: 'https://habr.com/ru/company/owasp/blog/337146/' },
        ],
      },
      {
        id: 5,
        name: 'Documents',
        children: [
          {
            id: 6,
            name: 'graylog',
            link: 'https://habr.com/ru/company/itsoft/blog/557200/'
          }
        ],
      }
    ]
  }),
  computed: () => ({
    service: new UlinksService(this.$store.getters.baseURL)
  }),
  created() {
    this.service(this.$store.getters.baseURL).getList().then(data => {
      this.items = data
    }).catch(error => {
      this.$store.dispatch('setError', error)
    })
  }
}
</script>

<style scoped>

</style>