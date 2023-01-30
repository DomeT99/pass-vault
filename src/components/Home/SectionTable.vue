<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/
import { onMounted, ref } from "vue";

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
let showPagination = ref(false);

onMounted(async () => {
  try {
    await pswStore.populateData();

    if (pswStore.dbData.length !== 0) {
      showPagination.value = true;
    } else {
    }
  } catch (e) {
    throw e;
  }
});
</script>

<template>
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in table-responsive">
    <Table :id="idTable" />
  </section>

  <template v-if="showPagination">
    <section class="d-flex justify-content-center container pt-5 fade-in">
      <Pagination :id="idTable" :data-json="pswStore.dbData" />
    </section>
  </template>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
