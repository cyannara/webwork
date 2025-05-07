<template>
  <div>
    <h1>부모 컴포넌트</h1>
    <p>현재 counter: {{ counter }}</p>
    <ButtonSync :counter.sync="counter" />
  </div>

  <ChildInput
    :modelValue="msg"
    @update:modelValue="($event) => (msg = $event)"
  /><br />
  <ChildInput v-model="msg" />
  <h2>{{ msg }}</h2>
</template>

<script setup>
import { ref } from "vue";
import ButtonSync from "../components/ButtonSync.vue";
import ChildInput from "../components/ChildInput.vue";
import ChildInputModel from "../components/ChildInputModel.vue";

const counter = ref(0);
const msg = ref("Hello World!");
</script>
