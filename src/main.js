import { createApp } from "vue";
import App from "./App.vue";
import OhVueIcon from "./utils/icons";

import "./main.css";
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
