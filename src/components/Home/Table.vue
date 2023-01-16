<script setup lang="ts">
import { DataJson } from "../../modules/types";

interface TableModel {
  id: string;
  dataJson: DataJson[];
}


const props = defineProps<TableModel>();
</script>
<template>
  <table :id="props.id" class="table table-bordered table-hover">
    <thead class="table-secondary">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Site/App</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.dataJson">
        <td>{{ item.id }}</td>
        <td>{{ item.site }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.password }}</td>
      </tr>
    </tbody>
  </table>
</template>
