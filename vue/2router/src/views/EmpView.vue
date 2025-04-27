<script>
import EmpList from "./EmpList.vue";
import EmpForm from "./EmpForm.vue";

export default {
  components: { EmpList, EmpForm },
};
</script>
<template>
  <div class="row">
    <div class="col border"><emp-list /></div>
    <div class="col border"><emp-form /></div>
  </div>
</template>
