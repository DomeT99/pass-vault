<script setup lang="ts">
let dataJson = [
  { First: "First 1", Last: "First 1" },
  { First: "First 2", Last: "First 1" },
  { First: "First 3", Last: "First 1" },
  { First: "First 4", Last: "First 1" },
  { First: "First 5", Last: "First 1" },
  { First: "First 6", Last: "First 1" },
  { First: "First 7", Last: "First 1" },
  { First: "First 8", Last: "First 1" },
  { First: "First 9", Last: "First 1" },
  { First: "First 10", Last: "First 1" },
];
</script>
<template>
  <table class="table table-bordered table-hover">
    <thead class="table-secondary">
      <tr>
        <th scope="col">First</th>
        <th scope="col">Last</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dataJson">
        <td>{{ item.First }}</td>
        <td>{{ item.Last }}</td>
      </tr>
    </tbody>
  </table>
</template>
