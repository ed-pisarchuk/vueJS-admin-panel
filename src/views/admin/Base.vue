<template>
  <div>
    <admin-settings></admin-settings>
    <router-view></router-view>
  </div>
</template>

<script>
import AdminSettings from "../../components/AdminSettings";
export default {
  name: "Base",
  components: {AdminSettings}
}
</script>

<style scoped>

</style>