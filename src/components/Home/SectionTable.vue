<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/

//Components
import Table from "../common/Table.vue";
import Filter from "./Filter.vue";
import Pagination from "../common/Pagination.vue";

import _ from "lodash";

let idTable: string = _.uniqueId("");
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
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in">
    <Table :id="idTable" />
  </section>
  <section class="d-flex justify-content-center container pt-5 fade-in">
    <Pagination :id-table="idTable" :data-json="dataJson" />
  </section>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
