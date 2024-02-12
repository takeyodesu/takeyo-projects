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
            path: "/work01",
            name: "work01",
            component: () => import("../views/Work01View.vue"),
        },
        {
            path: "/work02",
            name: "work02",
            component: () => import("../views/Work02View.vue"),
        },
        {
            path: "/work03",
            name: "work03",
            component: () => import("../views/Work03View.vue"),
        },
        {
            path: "/work04",
            name: "work04",
            component: () => import("../views/Work04View.vue"),
        },
    ],
});

export default router;
