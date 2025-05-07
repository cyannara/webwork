<template>
  <div class="row">
    <div class="col">
      <table class="table">
        <thead>
          <tr>
            <th>사번</th>
            <th>이름</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(emp, idx) in emps"
            :key="emp.id"
            @click="selectHandler(idx)"
          >
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
    </div>
    <div class="col">
      <div>
        <h3>{{ emp ? "직원 수정" : "직원 등록" }}</h3>
        사번 : <input v-model="emp.id" class="form-control" />
        <div>
          <label>fname</label>
          <input v-model="emp.first_name" class="form-control" />
        </div>
        <div>
          <label>lname</label>
          <input v-model="emp.last_name" class="form-control" />
        </div>
        <div>
          <label>jobId</label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              v-model="emp.job_id"
              value="it"
            /><label class="form-check-label">IT</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              v-model="emp.job_id"
              value="sales"
            /><label class="form-check-label">SALES</label>
          </div>
        </div>
        <div>
          <label>부서</label>
          <select v-model="emp.department_id" class="form-select">
            <option v-for="dept in depts" :value="dept.id">
              {{ dept.dname }}
            </option>
          </select>
        </div>
        <div>
          <label>급여</label>
          <input class="form-control" v-model="emp.salary" />
        </div>
        <div>
          <label>이메일</label>
          <input class="form-control" v-model="emp.email" />
        </div>
        <button @click="empUpdate()" class="btn btn-success mt-2">수정</button>
        <button @click="reset()" class="btn btn-warning mt-2">초기화</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "/api/emp"; // API 서버 주소

export default {
  data() {
    return {
      emps: [],
      emp: {},
      depts: [],
    };
  },
  methods: {
    fetchDeptList() {
      axios
        .get("/api/dept")
        .then((response) => (this.depts = response.data));
    },
    fetchList() {
      axios.get("").then((response) => (this.emps = response.data));
    },
    empUpdate() {
      axios.post("", this.emp).then(() => this.fetchList());
    },
    deleteEmp(id) {
      axios.delete(`/${id}`).then(() => this.fetchList());
    },
    selectHandler(idx) {
      this.emp = { ...this.emps[idx] };
    },
  },
  mounted() {
    this.fetchList();
    this.fetchDeptList();
  },
};
</script>
