<script>
export default {
  data: function () {
    return {
      depts: [
        { dno: 10, dname: "개발" },
        { dno: 20, dname: "인사" },
        { dno: 30, dname: "총무" },
      ],
      emp: {
        employee_id: "100",
        first_name: "길동",
        last_name: "홍",
        email: "",
        phone_number: "",
        hire_date: "",
        job_id: "",
        salary: "",
        commission_pct: "",
        manager_id: "",
        department_id: "20",
      },
    };
  },
  methods: {
    empUpdate() {
      console.log(JSON.stringify(this.emp));
    },
  },
};
</script>
<template>
  <div>
    사번 : <input v-model="emp.employee_id" /><br />
    fname : <input v-model="emp.first_name" /><br />
    jobId : <input type="radio" v-model="emp.job_id" value="it" />IT
    <input type="radio" v-model="emp.job_id" value="sales" />SALES<br />
    부서 :
    <select v-model="emp.department_id">
      <option v-for="dept in depts" :value="dept.dno">
        {{ dept.dname }}
      </option></select
    ><br />
    <button @click="empUpdate()">수정</button>
  </div>
</template>
