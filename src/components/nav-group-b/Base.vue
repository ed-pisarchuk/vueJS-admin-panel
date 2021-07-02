<template>
  <div>
    <v-card style="padding: 20px">
      <navigation-chain></navigation-chain>
    </v-card>
    <div style="margin-top: 10px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


import NavigationChain from "@/components/NavigationChain";
export default {
  name: "Base",
  components: {NavigationChain}
}
</script>

<style scoped>
</style>