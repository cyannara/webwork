import { createRouter, createWebHistory } from "vue-router";
//import EmpView from "../views/EmpView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/emp",
      name: "emp",
      //component: EmpView,
      component: () =>
        import(/* webpackChunkName: "emp" */ "../views/EmpView.vue"),
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
      path: "/parent2",
      name: "ParentComponent2",
      component: () =>
        import(
          /* webpackChunkName: "parent2" */ "../views/ParentComponent2.vue"
        ),
    },
    {
      path: "/parent3",
      name: "ParentComponent3",
      component: () =>
        import(
          /* webpackChunkName: "parent3" */ "../views/ParentComponent3.vue"
        ),
    },
    {
      path: "/parent4",
      name: "ParentComponent4",
      component: () =>
        import(
          /* webpackChunkName: "parent4" */ "../views/ParentComponent4.vue"
        ),
    },
    {
      path: "/parent5",
      name: "ParentComponent5",
      component: () =>
        import(
          /* webpackChunkName: "parent5" */ "../views/ParentComponent5.vue"
        ),
    },
    {
      path: "/slot",
      name: "SlotUseModalLayout",
      component: () =>
        import(
          /* webpackChunkName: "slot" */ "../views/SlotUseModalLayout.vue"
        ),
    },
  ],
});

export default router;
