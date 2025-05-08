<template>
  ddd
  <div class="container mt-4 border">
    <div class="card h-100 shadow-sm">
      <div class="card-header">
        <h5 class="card-title">{{ props.title }} ( {{ author }} )</h5>
      </div>
      <div class="card-body">
        좋아요 {{ likes }}
        <div v-if="isPublished">출판됨</div>
        <div v-else>작성중</div>
        <div class="mt-3">
          <h5>댓글리스트</h5>
          <div v-for="comment in commentIds">{{ comment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
//{{title}}  {{props.title}}
//템플릿 안에서는 props 생략 가능함
//script 안에서 props.title로 접근해야 함
const props = defineProps({
  title: { type: String, required: true },
  author: String,
  likes: {
    type: Number,
    validator: function (value) {
      return value > 0;
    },
  },
  isPublished: Boolean,
  commentIds: Array,
});
//props: ["title", "author", "likes", "isPublished", "commentIds"],
</script>
