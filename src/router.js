import { createRouter, createWebHistory } from "vue-router";
import FilmsList from "./components/layout/FilmsList";
import InfoDialog from "./components/layout/InfoDialog";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/1" },
    {
      path: "/:pageId",
      component: FilmsList,
      props: true,
      children: [{ path: "/:filmId", component: InfoDialog, props: true }],
    },
  ],
});

export default router;
