<template>
  <DataTable class="display" :columns="columns" ajax="/api/board"></DataTable>
</template>
<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
 
DataTable.use(DataTablesCore);

const columns = [
  { data: 'id' },
  { data: 'title' },
  { data: 'writer' },
];
</script>