<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <button class="btn-success" @click="increment">증가</button>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  computed: {
    //store state를 컴포넌트에 등록
    //computed()는 getters 프로퍼티가 됨.
    ...mapState(useCounterStore, ["name", "count"]),
  },
  //methods function()은 actions 프로퍼티가 됨.
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
};
</script>
