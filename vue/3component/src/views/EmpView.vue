<template>
  <div class="row">
    <div class="col-6 border">
      <emp-list @select="selectHandler" ref="listRef" />
    </div>
    <div class="col-6 border">
      <emp-form :selemp="selectedEmp" @saved="savedHandler" />
    </div>
  </div>
</template>
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
    savedHandler() {
      this.$refs.listRef.fetchList();
    },
    selectHandler(emp) {
      console.log(emp.job_id);
      this.selectedEmp = emp;
    },
  },
};
</script>
