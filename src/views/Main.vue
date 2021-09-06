<template>
  <div>
    <LazyYoutube
        ref="youtubeLazyVideo"
        src="https://www.youtube.com/watch?v=BHACKCNDMW8"
        max-width="720px"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
    />
    </div>
</template>

<script>
export default {
  name: "Main",
  created() {
  }
}
</script>

<style scoped>

</style>