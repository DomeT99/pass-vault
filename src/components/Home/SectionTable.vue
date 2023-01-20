<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/

//Components
import Table from "./Table.vue";
import Filter from "./Filter.vue";
import Pagination from "./Pagination.vue";

//Types
import { DataJsonType } from "../../modules/types";

//Third Part Library
import _ from "lodash";

let idTable: string = _.uniqueId("");
let dataJson: DataJsonType[] = [
  { id: "1", site: "Reddit", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "Reddit", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "Reddit", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "Reddit", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "Reddit", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "das", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "dsa", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "dsas", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "das", username: "Dvalin99", password: "CiaoCiao2" },
  { id: "1", site: "s", username: "Dvalin99", password: "CiaoCiao2" },
];
</script>

<template>
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in table-responsive">
    <Table :id="idTable" />
  </section>
  <section class="d-flex justify-content-center container pt-5 fade-in">
    <Pagination :id="idTable" :data-json="dataJson" />
  </section>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
