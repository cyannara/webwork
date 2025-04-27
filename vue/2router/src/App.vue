<script>
import GoodsView from "./components/goods.vue";
import MemberForm from "./views/MemberForm.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { GoodsView, MemberForm },
  data() {
    return {
      fruits: ["사과", "바나나", "포도"],
      message: "greeting",
    };
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="alert alert-primary" role="alert">
      <h1>Hello App!</h1>
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/memberForm" class="nav-link" aria-current="page"
                >회원가입</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/movie" class="nav-link" aria-current="page"
                >영화순위</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/empView" class="nav-link" aria-current="page"
                >사원관리</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/paramView/kim"
                class="nav-link"
                aria-current="page"
                >파라미터1</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/paramView/park"
                class="nav-link"
                aria-current="page"
                >파라미터2</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
