<template>
  <div class="alert alert-warning">
    <h2>{{ props.title }}</h2>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["title"]);

// 배열로 받기
//  ["title"],

{
  // 객체로 받기기
  /*title: {
    type: String,
    //default: "페이지 제목입니다.",
    required: true,
  },*/
}
</script>
