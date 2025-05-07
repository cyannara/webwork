<template>
  <div>
    <p>자식 컴포넌트에서 조작</p>
    <button @click="increase">+1 증가</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  counter: Number,
});

const emit = defineEmits(["update:counter"]);

const increase = () => {
  emit("update:counter", props.counter + 1);
};
</script>
