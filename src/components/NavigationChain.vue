<template>
  <div style="display: flex; flex-direction: row">
    <template template v-for="(item, index) in $route.matched">
      <template v-if="item.name.length > 0">
        <div :key="index">
          <template v-if="++index !== $route.matched.length">
            <a :href="[item.path ? item.path : '/']">{{ item.name }}</a>
              <v-icon style="padding: 0 3px">arrow_right_alt</v-icon>
          </template>
          <template v-else>
            <span>{{ item.name }}</span>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<script>


export default {
  name: "NavigationChain",
  created() {
    console.log(Boolean(this.$route.matched[0 + 1].name))
  }
}
</script>

<style scoped>
a {
  color: #1867c0;
}
a:hover {
  text-decoration: underline;
}
a:active {
  color: blue;
}
</style>