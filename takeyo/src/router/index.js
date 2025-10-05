import { createRouter, createWebHistory } from "vue-router";
import TopView from "../views/TopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "top",
      component: TopView,
    },
    {
      path: "/newspaper",
      name: "newspaper",
      component: () => import("../views/Work01View.vue"),
    },
    {
      path: "/shikikakuijou",
      name: "shikikakuijou",
      component: () => import("../views/Work02View.vue"),
    },
    {
      path: "/poster",
      name: "poster",
      component: () => import("../views/Work03View.vue"),
    },
    {
      path: "/graphic",
      name: "graphic",
      component: () => import("../views/Work04View.vue"),
    },
    {
      path: "/animal-hospital",
      name: "aanimal-hospital",
      component: () => import("../views/Work05View.vue"),
    },
    {
      path: "/creator-tools",
      name: "creator-tools",
      component: () => import("../views/Work06View.vue"),
    },
    {
      path: "/creator-lp",
      name: "creator-lp",
      component: () => import("../views/Work07View.vue"),
    },
    {
      path: "/game-color-picker",
      name: "game-color-picker",
      component: () => import("../views/Work08View.vue"),
    },
    {
      path: "/holoearth-shop",
      name: "holoearth-shop",
      component: () => import("../views/Work09View.vue"),
    },
  ],
});

export default router;
