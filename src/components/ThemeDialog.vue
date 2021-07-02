<template>
  <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      @click:outside="closeThemeDialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab small style="margin-right: 15px" v-bind="attrs" v-on="on">
        <v-icon>palette</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="primary"
            dark
        >Выберите тему
        </v-toolbar>
        <div class="spacing"></div>

        <v-card-text>

          <v-row style="{margin-bottom: 20px}">
            <v-spacer style="{margin-bottom: 20px}"></v-spacer>
            <v-col
                v-for="img in backgrounds.keys()"
                :key="img"
                cols="12"
                sm="6"
                md="4"
            >
              <v-card>
                <a @click="chooseTheme(dialog, img)">
                  <v-img height="100px" :src="imgUrl(img)" :key="img"/>
                </a>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
              text
              @click="dialog.value = false"
          >Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
name: "ThemeDialog",
  computed: {
    backgrounds: () => {
      return require.context('@/assets/background', false, /\.jpg$/)
    }
  },
  methods: {
    imgUrl(url) {
      return require(`@/assets/background/${url.slice(2)}`)
    },
    chooseTheme(dialog, url) {
      this.$store.dispatch('setUserTheme', url.slice(2))
      this.$vuetify.theme.dark = this.$store.getters.themeColor
    },
    closeThemeDialog() {
      this.$store.dispatch('saveUserTheme')
    }
  }
}
</script>

<style scoped>
.spacing {
  padding: 12px;
}
</style>