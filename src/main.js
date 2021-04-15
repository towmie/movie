import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Pagination from "v-pagination-3";

const app = createApp(App);

app.use(store);
app.use(router);
app.component("pagination", Pagination);

app.mount("#app");

// const API_KEY = "964401a7366717c6e0b71563c80e8010";
