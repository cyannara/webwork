<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <button class="btn-success" @click="counterStore.increment">증가</button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

// 스토어 객체로 인스턴스 생성
const counterStore = useCounterStore();

//store state를 컴포넌트에 등록
const {name,count} = storeToRefs(counterStore);

</script>
