<script>
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"; // API 서버 주소

export default {
  data() {
    return { emps: [] };
  },
  methods: {
    fetchList() {
      axios.get("/emp").then((res) => (this.emps = res.data));
    },
    deleteEmp(employee_id) {
      if (confirm("정말 삭제하시겠습니까?")) {
        axios.delete(`/emp/${employee_id}`).then(() => {
          this.fetchList();
          this.$emit("select", {});
        });
      }
    },
  },
  mounted() {
    this.fetchList();
  },
};
</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in emps" :key="emp.id" @click="$emit('select', emp)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button @click="deleteEmp(emp.id)" class="ml-4 text-red-600">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
