<template>
  <div class="container mt-4">
    <div class="card h-100 shadow-sm">
      <div class="card-header">
        <h5 class="card-title">{{ title }} ( {{ author }} )</h5>
      </div>
      <div class="card-body">
        좋아요 {{ likes }}
        <div v-if="is - published">출판됨</div>
        <div v-else>작성중</div>
        <div class="mt-3">
          <h5>댓글리스트</h5>
          <div v-for="comment in commentIds">{{ comment }}</div>
        </div>
      </div>
      <!-- <h6 class="card-subtitle mb-2 text-muted">
              {{ post.author }} · {{ formatDate(post.createdAt) }}
            </h6>
            <p class="card-text">{{ post.summary }}</p>
            <router-link
              :to="`/posts/${post.id}`"
              class="card-link text-decoration-none"
            >
              자세히 보기
            </router-link>
       -->
    </div>
  </div>
</template>
<script>
export default {
  //props: ["title", "author", "likes", "isPublished", "commentIds"],
  props: {
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
  },
};
</script>
