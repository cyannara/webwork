<template>
  <div>
    <a href="#" @click="router.push('/')">home</a>
    <a href="#" @click="goproduct">상품조회</a> 

    <ul>
      <li>
        <router-link :to="{ name: 'productinfo', params: { id: 1 } }"
          >상품상세페이지로 이동</router-link
        >
      </li>
      <!-- <li><router-link to="/productinfo/1">상품페이지로 이동</router-link></li> -->
      <li>
        <!-- <router-link :to="{ name: 'productinfo', query: { id: 10 } }"
          >상품페이지로 이동(name)</router-link
        > -->
      </li>
      <li><a href="#" @click="goproduct">상품페이지로 이동(push)</a></li>
    </ul>
    parent : {{ counter }}
    <button-counter :count="counter" @incrementevent="incrementCounter">
      증가{{ counter }}
    </button-counter>
    <br /><br />
    <fancy-button /> <br /><br />
    <fancy-button>등록</fancy-button> <br /><br />
    <fancy-button>
      <span style="color: red">클릭 미!!</span>
    </fancy-button>
    <base-layout>
      <template v-slot:header> 회원등록 </template>
      <template v-slot:default> <input /><button>저장</button> </template>
      <template v-slot:footer>
        <button type="reset">취소</button>
      </template>
    </base-layout>
  </div>
</template>

<script setup>
import ButtonCounter from "../components/ButtonCounter.vue";
import FancyButton from "../components/FancyButton.vue";
import BaseLayout from "../components/BaseLayout.vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const counter = ref(0);

function incrementCounter() {
  counter.value++;
}

function goproduct() {
  router.push("/");
  //router.push({ name: "home" });
}
</script>
