import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: () => import("../views/HomeView.vue"),
      component: () => import('@/views/detail/DetailView.vue'),
    },
    {
      path: '/homes',
      name: 'detail',
      component: () => import('@/views/detail/DetailView.vue'),
    },
  ],
});

export default router;
