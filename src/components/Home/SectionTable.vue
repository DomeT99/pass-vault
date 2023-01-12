<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/

//Components
import Table from "../common/Table.vue";
import Filter from "./Filter.vue";
</script>

<template>
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in">
    <Table />
  </section>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
