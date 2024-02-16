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
      path: "/web",
      name: "web",
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
      path: "/lp",
      name: "lp",
      component: () => import("../views/Work05View.vue"),
    },
  ],
});

export default router;
