import Vue from "vue";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";

// vuetify
import Vuetify from "vuetify";
Vue.use(Vuetify);

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
