import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "sign-in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/addpassword",
    name: "addpassword",
    component: () => import("../views/AddPassword.vue"),
  },
  {
    path: "/updatepassword/:id",
    name: "updatepassword",
    component: () => import("../views/AddPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
