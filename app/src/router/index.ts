import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    meta: { title: "Home" },
    name: "Home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/about",
    meta: { title: "About" },
    name: "About",
    component: () => import("@/views/AboutView.vue")
  },
  {
    path: "/:catchAll(.*)*",
    meta: { title: "404" },
    name: "404",
    component: () => import("@/views/404View.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
