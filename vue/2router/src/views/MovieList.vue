<template>
  <input v-model="targetDt" @click.enter="getMovieList" /><button
    @click="getMovieList"
  >
    조회
  </button>
  <table>
    <tr v-for="movie in movies">
      <td>{{ movie.rank }}</td>
      <td>{{ movie.movieCd }}</td>
      <td>{{ movie.movieNm }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  data: function () {
    return {
      targetDt: "20250101",
      movies: [],
    };
  },
  methods: {
    yesterday() {
      const date = new Date();
      date.setDate(date.getDate() - 1); // 하루 전으로 설정

      const yyyymmdd =
        date.getFullYear().toString() +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getDate()).padStart(2, "0");
      return yyyymmdd;
    },
    getMovieInfo(movieCd) {
      this.isLoading = true;
      fetch(infourl + movieCd)
        .then((res) => res.json())
        .then((res) => {
          this.actors = res.movieInfoResult.movieInfo.actors;
          this.directors = res.movieInfoResult.movieInfo.directors;
          this.isLoading = false;
        });
    },
    getMovieList() {
      fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=" +
          this.targetDt
      )
        .then((response) => response.json())
        .then(
          (response) =>
            (this.movies = response.boxOfficeResult.dailyBoxOfficeList)
        );
    },
  },
  created() {
    this.targetDt = this.yesterday();
  },
  mounted() {
    this.getMovieList();
  },
};
</script>
