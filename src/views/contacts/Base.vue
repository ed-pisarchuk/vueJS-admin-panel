<template>
  <div class="container">
    <google-map :name="name"></google-map>

  </div>
</template>

<script>
import googleMap from '@/components/Map.vue'

export default {
  name: "Base",
  data: function () {
    return {
      name: 'map'
    }
  },
  mounted: function () {
  },
  components: {googleMap}
}
</script>
