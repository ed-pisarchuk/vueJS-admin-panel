<template>
  <div>
    <v-card>
      <p style="color: rebeccapurple">{{ $route.name }}</p>
  <v-treeview
      rounded
      hoverable
      activatable
      dark
      :items="items"
  ></v-treeview>
      <tree></tree>
    </v-card>
  </div>
</template>

<script>
import {UlinksService} from "@/api/ulinks";
import Tree from "@/components/Tree";

export default {
  name: "Links",
  components: {Tree},
  props: {
    text: String
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :'}]
  }),
  created() {
    new UlinksService(this.$store.getters.baseURL).getList().then(data => {
      alert(JSON.stringify(data))
      this.items = data
    })
  }
}
</script>

<style scoped>

</style>