<script>
import EmpList from "@/components/EmpList.vue";
import EmpForm from "@/components/EmpForm.vue";

export default {
  components: { EmpList, EmpForm },
  data() {
    return {
      selectedEmp: {},
    };
  },
  methods: {
    handleSaved() {
      this.$refs.listRef.fetchList();
    },
    handleSelect(emp) {
      console.log(emp.job_id);
      this.selectedEmp = emp;
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col-6 border">
      <emp-list @select="handleSelect" ref="listRef" />
    </div>
    <div class="col-6 border">
      <emp-form :selemp="selectedEmp" @saved="handleSaved" />
    </div>
  </div>
</template>
