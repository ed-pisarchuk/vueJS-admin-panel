<template>
<p style="color: rebeccapurple">{{ $route.name }}</p>
</template>

<script>
export default {
  name: "Office",
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>