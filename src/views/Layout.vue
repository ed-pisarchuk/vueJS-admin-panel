<template>
    <v-app id="inspire" :style="$store.getters.backgroundStyle">
        <v-navigation-drawer
                app
                clipped
                v-model="drawer"
        >
          <v-list dense>
            <div v-for="(item, index) in getRoutes(this.$router.options.routes)" :key="index">
              <template v-if="item && item.title">
              <v-list-item :to="item.link" v-if="!item.isUrl" >
                <v-list-item-icon>
                  <v-icon style="right: 90px;">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </template>
            </div>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Административная панель</v-toolbar-title>


            <v-spacer></v-spacer>

          <theme-dialog></theme-dialog>

          <v-btn @click="logoutBtn" fab small>
                <v-icon>input</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container>
                <error-handler></error-handler>
              <v-card style="padding: 20px">
                <navigation-chain></navigation-chain>

                <router-view/>
              </v-card>
            </v-container>
        </v-content>

        <v-footer app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import ErrorHandler from "@/components/ErrorHandler";
import ThemeDialog from "@/components/ThemeDialog";
import NavigationChain from "../components/NavigationChain";

export default {
  components: {NavigationChain, ThemeDialog, ErrorHandler},
  props: {
    source: String,
  },
  data: () => ({
    drawer: null
  }),
  computed: {},
  created() {
    this.$vuetify.theme.dark = this.$store.getters.themeColor
  },
  methods: {
    getRoutes(routes) {
      let routesDict = []
      routesDict.push({
        title: routes[0].name,
        link: routes[0].path,
        isUrl: false,
        icon: routes[0].meta.icon
      })
      for (let item of routes[0].children) {
        if (!item.meta.permissionDeniedFor || !item.meta.permissionDeniedFor.includes(this.$store.state.auth.user.role)) {
          routesDict.push({
            title: item.name,
            link: '/' + item.path,
            isUrl: false,
            icon: item.meta.icon
          })
        }
      }
      return routesDict
    },
    logoutBtn() {
      this.$store.dispatch('auth/logout')
      this.$router.go(0)
    }
  }
}
</script>

<style>

.v-list-item__icon {
  width: 0px;
}

</style>