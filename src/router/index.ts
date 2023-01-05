import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "sign-in",
    component: () => import('../views/SignIn.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
