<script setup lang="ts">
/**Section that is loaded asynchronously in Home views*/
import { computed } from "vue";

//Components
import Table from "./Table.vue";
import Filter from "./Filter.vue";

//Modules
import { PswDBModel } from "../../modules/models";

//Third Part Library
import _ from "lodash";


interface SectionTable {
  dbData: PswDBModel[];
}

const props = defineProps<SectionTable>();

let idTable: string = _.uniqueId("");

let isDbDataComputed = computed(() => props.dbData) as unknown as PswDBModel[];

</script>

<template>
  <section class="container pt-10 fade-in">
    <Filter />
  </section>
  <section class="container pt-5 fade-in table-responsive">
    <Table :id="idTable" :data-json="isDbDataComputed" />
  </section>
</template>
<style scoped>
.pt-10 {
  padding-top: 10rem;
}
</style>
