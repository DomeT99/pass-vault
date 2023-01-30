<script setup lang="ts">
//Interface to describe the component's props
interface TableModel {
  id: string;
}
const props = defineProps<TableModel>();
</script>
<template>
  <table class="table table-bordered table-hover">
    <thead class="table-secondary">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Site/App</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody :id="props.id"></tbody>
  </table>
</template>
