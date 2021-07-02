<template>
  <div>
    <v-snackbar
        :top="true"
        v-model="this.$store.getters.isError"
        timeout="-1"
    >
      <template v-for="(error, index) in this.$store.state.errors">

        <div :key="index">
          <bold><span style="color: #F44336">{{ error.code }}</span> {{ error.title }}:</bold>
          {{ error.description }}
        </div>
      </template>
      <v-btn style="float: right"
             @click="dropError"
             color="red"
             text
      >
        Закрыть
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "ErrorHandler",
  methods: {
    dropError(){
      this.$store.dispatch('dropError')
    }
  }
}
</script>

<style scoped>

</style>