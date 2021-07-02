<template>
    <v-card>
    <p>{{ $route.fullPath }} {{ $route.name }} {{ $route.path }} {{ $route.params }} {{ $route.query }} {{$router.options.routes}}</p>
    <tree></tree>
    </v-card>
</template>

<script>
import Tree from "@/components/Tree";
export default {
  name: "NavItemA",
  components: {Tree}
}
</script>

<style scoped>

</style>