<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="
                  white-space: pre-wrap;
                  border: none;
                  background-color: white;
                "
                >{{ boardInfo.content }}</pre
              >
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info"
                @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
              <button class="btn btn-xs btn-warining"
                @click="goToListForm()">
                목록
              </button>
              <!-- <router-link to="/list" class="btn btn-xs btn-success">목록</router-link>
                            <button class="btn btn-xs btn-warning" @click="deleteBoard(boardInfo.no)">삭제</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div>
      <CommentComp :bid="boardInfo.id"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CommentComp from "@/components/CommentComp.vue";
export default {
  components:{CommentComp}, 
  data() {
    return {
      searchNo: "",
      boardInfo: {},
    };
  },
  created() {
    this.searchNo = this.$route.query.id;
    this.getBoardInfo();
  },
  methods: {
    async getBoardInfo() {
      let board = await axios.get(`/api/board/${this.searchNo}`);
      this.boardInfo = board.data[0];
    },
    goToUpdateForm(id) {
      this.$router.push({ path: "/boardForm", query: { id: id } });
    },
    goToListForm() {
      this.$router.push({ path: "/boardList" });
    },
  }
}
</script>
