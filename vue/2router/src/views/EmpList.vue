<script>
import axios from "axios";
export default {
  data() {
    return { emps: [] };
  },
  mounted() {
    axios.get("/empdata.json").then((res) => (this.emps = res.data));
  },
};
</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th>이름</th>
        <th>이메일</th>
        <th>급여</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in emps">
        <td>{{ emp.employee_id }}</td>
        <td>{{ emp.first_name }}</td>
        <td>{{ emp.last_name }}</td>
        <td>{{ emp.email }}</td>
        <td>{{ emp.salary }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
