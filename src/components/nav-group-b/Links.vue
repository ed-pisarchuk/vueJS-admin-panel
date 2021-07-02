<template>
    <v-card>
      <v-treeview
          rounded
          hoverable
          activatable
          :items="items"
      ></v-treeview>
    </v-card>
</template>

<script>
 import {UlinksService} from "@/api/ulinks";

export default {
  name: "Links",
  components: {},
  props: {
    text: String
  },
  data: () => ({
    items: [
      {}]
  }),
  created() {
    new UlinksService(this.$store.getters.baseURL).getList().then(data => {
      this.items = data
    })
  }
}
</script>

<style scoped>

</style>