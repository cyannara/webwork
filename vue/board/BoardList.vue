<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="i"
          v-for="(board, i) in boardList"
          @click="goToDetail(board.no)"
        >
          <td>{{ board.no }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ getDateFormat(board.created_date) }}</td>
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      boardList: [],
    };
  },
  created() {
    this.getBoardList();
  },
  methods: {
    async getBoardList() {
      let result = await axios.get(`/api/board`);
      this.boardList = result.data;
    },
    goToDetail(no) {
      this.$router.push({ path: "/info", query: { no: no } });
    },
    getDateFormat(date) {
      return this.$dateFormat(date);
    },
  },
};
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
