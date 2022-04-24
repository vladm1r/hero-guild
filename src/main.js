import { createApp } from "vue";
import App from "./App.vue";
import OhVueIcon from "./utils/icons";
import { createPinia } from "pinia";

import "./main.css";
const app = createApp(App);
app.use(createPinia());
app.component("v-icon", OhVueIcon);
app.mount("#app");
