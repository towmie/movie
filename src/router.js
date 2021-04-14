import { createRouter, createWebHistory } from "vue-router";
import FilmsList from "./components/layout/FilmsList";
import InfoDialog from "./components/layout/InfoDialog";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: FilmsList },
    { path: "/:id", component: InfoDialog, props: true },
  ],
});

export default router;
