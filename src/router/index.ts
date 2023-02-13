import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "sign-in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/addpassword",
    name: "addpassword",
    component: () => import("../views/HandlePassword.vue"),
  },
  {
    path: "/updatepassword/:id",
    name: "updatepassword",
    component: () => import("../views/HandlePassword.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("../views/HandlePassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
