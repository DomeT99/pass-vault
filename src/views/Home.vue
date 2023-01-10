<script setup lang="ts">
import Layout from "../layout/Default.vue";
import Table from "../components/common/Table.vue";
import Filter from "../components/Home/Filter.vue";
</script>
<template>
  <Layout>
    <section class="container pt-10">
      <Filter />
    </section>
    <section class="container pt-5">
      <Table />
    </section>
  </Layout>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
