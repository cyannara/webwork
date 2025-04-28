<!-- Empview.vue -->
<template>
  <div class="row">
    <div class="col">
      <emp-list @select="selectHandler" 
          ref="listRef"/>
    </div>
    <div class="col">
      <emp-form :selEmp="selectedEmp" 
          @saved="savedHandler" />
      </div>
  </div>
</template>
<script>
import EmpForm from "../components/EmpForm.vue"
import EmpList from "../components/EmpList.vue"

export default {
  components:{ EmpForm, EmpList},
  data(){  return { selectedEmp : { first_name : 'test'} }  },
  methods:{
    selectHandler(emp){   this.selectedEmp = emp;   },
    savedHandler(){  this.$refs.listRef.fetchList();   }
  }
}
</script>