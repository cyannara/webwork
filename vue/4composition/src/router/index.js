import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoreView from "../views/StoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/productinfo/:id",
      name: "productinfo",
      component: () => import("../views/ProductInfo.vue"),
    },
    {
      path: "/watch",
      name: "watch",
      component: () => import("../views/WatchView.vue"),
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/BoardList.vue"),
    },
    {
      path: "/provide",
      name: "provide",
      component: () => import("../views/ProvideInject.vue"),
    },
    {
      path: "/component",
      name: "component",
      component: () => import("../views/ComponentView.vue"),
    },
    {
      path: "/sync",
      name: "sync",
      component: () => import("../views/InputModelView.vue"),
    },
    {
      path: "/nested",
      name: "nested",
      component: () => import("../views/NestedComponent.vue"),
    },
    {
      path: "/parent",
      name: "ParentComponent",
      component: () =>
        import(/* webpackChunkName: "parent" */ "../views/ParentComponent.vue"),
    },
    {
      path: "/parent4",
      name: "ParentComponent4",
      component: () =>
        import(
          /* webpackChunkName: "parent4" */ "../views/ParentComponent4.vue"
        ),
    },
    { path: "/store", component: StoreView },
  ],
});

export default router;
