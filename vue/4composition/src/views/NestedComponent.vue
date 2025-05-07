<template>
  <div>
    <PageTitle title="컴포넌트 props 연습" />
    <BlogPost
      :title="post.title"
      :author="post.author"
      :likes="42"
      :is-published="post.isPublished"
      :comment-ids="[234, 266, 273]"
    />
    <BlogPost v-bind="post" />
    <BlogPost v-for="post in posts" v-bind="post" />
  </div>
</template>
<script setup>
import PageTitle from "../components/PageTitle.vue";
import BlogPost from "../components/BlogPost.vue";
import { ref } from "vue";

const posts = ref([
  {
    title: "자바 열공",
    author: "이순신",
    isPublished: true,
    commentIds: [],
  },
  {
    title: "Vue와 함께한 나의 여행",
    author: "홍길동",
    isPublished: true,
    commentIds: [234, 266, 273],
  },
]);

const post = ref({
  title: "Vue와 함께한 나의 여행",
  author: "홍길동",
  isPublished: true,
  commentIds: [234, 266, 273],
});
</script>
