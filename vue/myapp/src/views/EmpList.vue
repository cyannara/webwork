<script>
import axios from 'axios'
export default {
  data(){
    return { emps : []}
  },
  mounted(){
    axios.get("/empdata.json")
    .then(res=>this.emps = res.data);
  }
}
</script>
<template>
  <table>
    <tr v-for="emp  in emps">
      <td>{{emp.first_name}}</td>
      <td>{{emp.last_name}}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>
<style></style>