<template>
  <div>
    <BButton @click="modal = !modal"> Toggle modal </BButton>
    <BModal v-model="modal" title="Hello, World!"> Foobar? </BModal>
  </div>
</template>
<script setup>
import { ref } from "vue";
const modal = ref(false);
</script>
