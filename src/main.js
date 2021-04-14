import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");

// const API_KEY = "964401a7366717c6e0b71563c80e8010";
// const API_URL = "https://api.themoviedb.org/3/";
// const IMG_Path = "https://image.tmdb.org/t/p/w700";

// async function getData() {
//   const resp = await fetch(
//     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=964401a7366717c6e0b71563c80e8010&page=1"
//   );
//   const data = await resp.json();
//   console.log(data);
// }
// getData();

// /top_rated
