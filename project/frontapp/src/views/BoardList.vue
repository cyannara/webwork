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
        <tr v-for="(board, i) in boardList"
           :key="board.id"
           @click="goToDetail(board.id)"
        >
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
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
    goToDetail(id) {
       //query: ?id=1      param : boardInfo/1
      this.$router.push({ path: "/boardInfo", query: { id: id } });
    },
  },
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
