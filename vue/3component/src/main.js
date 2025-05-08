//import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
