import { createMemoryHistory, createRouter } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import MemberForm from "../views/MemberForm.vue";
import ParamView from "../views/ParamView.vue";
import EmpView from "../views/EmpView.vue";
import MovieList from "@/views/MovieList.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/memberForm", component: MemberForm },
  { path: "/empview", component: EmpView },
  { path: "/movie", component: MovieList },
  { path: "/paramView/:username", component: ParamView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
