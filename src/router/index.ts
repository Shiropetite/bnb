import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      //component: () => import("../pages/HomeView.vue"),
      component: () => import("../pages/detail/DetailView.vue"),
    },
    {
      path: "/homes",
      name: "detail",
      component: () => import("../pages/detail/DetailView.vue"),
    },
  ],
});

export default router;
