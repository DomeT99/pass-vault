<script setup lang="ts">
import Layout from "../layout/Default.vue";
import Table from "../components/common/Table.vue";
import Filter from "../components/Home/Filter.vue";
import Button from "../components/common/Button.vue";
import { computed } from "vue";

const btnIcon = computed(() => {
  return new URL("../assets/images/plus-solid.svg", import.meta.url).href;
});
</script>
<template>
  <Layout>
    <section class="container pt-10">
      <Filter />
    </section>
    <section class="container pt-5">
      <Table />
    </section>

    <section class="button-bar">
      <Button
        class="btn-secondary btn-pad"
        :prevent-default="true"
        :type="'button'"
        ><img :src="btnIcon" width="25" height="25" /></Button>
    </section>
  </Layout>
</template>
<style scoped lang="scss">
.pt-10 {
  padding-top: 10rem;
}
.button-bar {
  padding: 2rem;
  position: fixed;
  bottom: 0;
  right: 0;
}
.btn-pad {
  border-radius: 50%;
  padding: 20px !important;
}
</style>
