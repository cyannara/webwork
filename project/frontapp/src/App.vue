<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" href="#">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/boardList" class="nav-link" href="#"
              >게시판</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/boardTable" class="nav-link" href="#"
              >게시판테이블</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link" href="#"
              >로그인</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
