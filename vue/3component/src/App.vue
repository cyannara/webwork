<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/emp">사원관리</RouterLink> |
        <!-- <RouterLink to="/nested">컴포넌트안에 다른 컴포넌트 사용</RouterLink> | -->
        <RouterLink to="/parent"
          >부모컴포넌트에서 자식 컴포넌트의 이벤트 직접 발생</RouterLink
        >
        |
        <RouterLink to="/vuetify">vuetify</RouterLink> |
        <RouterLink to="/store">store</RouterLink> |
        <!--<RouterLink to="/bootstrap">bootstrap</RouterLink> |-->
      </nav>
    </div>
  </header>

  <RouterView />
</template>
