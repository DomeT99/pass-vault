<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/
import { onMounted, onUnmounted, onUpdated, ref, reactive } from "vue";

//Components
import Table from "./Table.vue";
import Filter from "./Filter.vue";
import Pagination from "./Pagination.vue";

//Modules
import { PswDBModel } from "../../modules/models";

//Third Part Library
import _ from "lodash";

//Store
import { usePasswordStore } from "../../store/passwordStore";

const pswStore = usePasswordStore();

let idTable: string = _.uniqueId("");
let showPagination = ref(false);
let dbData: PswDBModel[] = reactive([]);

onMounted(async () => {
  try {
    dbData = await pswStore.populateTable(dbData);
    if (dbData.length !== 0) {
      showPagination.value = true;
    }
  } catch (e) {
    throw e;
  }
});

onUnmounted(() => {
  /**Update the state dbData (reset array) */
  let localDbData = _.remove(dbData, () => {
    return [];
  });
  dbData = localDbData;
});

onUpdated(() => {
  if (dbData.length !== 0) {
    showPagination.value = true;
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
      <Pagination :id="idTable" :data-json="dbData" />
    </section>
  </template>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
