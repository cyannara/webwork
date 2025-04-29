<template>
  <div class="card">
    <div class="card-header">댓글 목록</div>
    <div class="card-body">
      <ul class="list-group">
        <li
          class="list-group-item"
          :key="i"
          v-for="(comment, i) in commentList"
        >
          <div class="container">
            <div class="row text-start">
              {{ comment.content }}
            </div>
            <div class="row">
              <div class="col-9 text-end">
                {{ comment.writer }}
              </div>
              <div class="col-3 text-center">
                {{ getDateFormat(comment.created_date) }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["bno"],
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    this.getCommentList();
  },
  mounted() {
    // this.getCommentList();
  },
  methods: {
    async getCommentList() {
      this.commentList = (
        await axios.get(`/api/board/${this.bno}/comment`)
      ).data;
    },
    getDateFormat(date) {
      return this.$dateFormat(date);
    },
  },
  // 부모 컴포넌트의 데이터가 비동기 통신을 기반으로 동작
  watch: {
    bno() {
      //this.getCommentList();
    },
  },
};
</script>
