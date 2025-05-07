<template>
  <div>provie / inject 연습</div>
  {{ itemLength }}
</template>
<script setup>
import { inject } from "vue";

const itemLength = inject("itemLength");

function onMounted() {
  console.log(this.itemLength);
}
</script>
