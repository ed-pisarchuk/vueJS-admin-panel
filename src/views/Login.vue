<template>
    <v-app id="inspire">
      <error-handler></error-handler>
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            md="4"
                            sm="8"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="dark"
                                    dark
                            >
                                <v-toolbar-title>Авторизация</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid" validation>
                                    <v-text-field
                                            :rules="[v => !!v || 'Login required']"
                                            @keyup.enter="loginBtn"
                                            id="email"
                                            label="Логин"
                                            name="login"
                                            prepend-icon="person"
                                            required
                                            type="text"
                                            v-model="login"
                                    ></v-text-field>

                                    <v-text-field
                                            :rules="[v => !!v || 'Password is required']"
                                            @keyup.enter="loginBtn"
                                            id="password"
                                            label="Пароль"
                                            name="password"
                                            prepend-icon="lock"
                                            required
                                            type="password"
                                            v-model="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :disabled="!valid"
                                       @click="loginBtn"
                                       color="dark">Войти
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import ErrorHandler from "@/components/ErrorHandler";

export default {
  components: {ErrorHandler},
  props: {
    source: String,
  },
  data: () => ({
    valid: false,
    login: '',
    password: '',
    snackbar: false,
    snackbarText: ''
  }),
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    loginBtn: function () {
      if (this.$refs.form.validate()) {
        let body = {
          username: this.login,
          password: this.password
        }
        this.$store.dispatch('auth/login', body)
            .then(user => {
              if (user && user.adminPanel) {
                if (user.adminPanel.user_role) {
                  this.$store.state.user = {role: user.adminPanel.user_role || 'guest'}
                }
              }
              this.$router.go(-1)
            })
            .catch(error => {
              this.$store.dispatch('setError', error)
            })
      }
    }
  }
}
</script>
