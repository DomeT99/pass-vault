<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/

//Components
import Table from "./Table.vue";
import Filter from "./Filter.vue";
import Pagination from "./Pagination.vue";

//Third Part Library
import _ from "lodash";

//Store
import { usePasswordStore } from "../../store/passwordStore";


const pswStore = usePasswordStore();

let idTable: string = _.uniqueId("");
</script>

<template>
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in table-responsive">
    <Table :id="idTable" />
  </section>
  <section class="d-flex justify-content-center container pt-5 fade-in">
    <Pagination :id="idTable" :data-json="pswStore.dbData" />
  </section>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
