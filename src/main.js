import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify"
import store from './store/index'
import router from "@/router"
import {VueCoreVideoPlayer} from 'vue-core-video-player';
import { LazyYoutube}  from "vue-lazytube";

Vue.component("LazyYoutube", LazyYoutube);
Vue.component("VueCoreVideoPlayer", VueCoreVideoPlayer);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

