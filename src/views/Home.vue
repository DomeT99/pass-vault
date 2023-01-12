<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";

import Layout from "../layout/Default.vue";
import Button from "../components/common/Button.vue";
import Loading from "../components/common/Loading.vue";
import Modal from "../components/common/Modal.vue";

const Table = defineAsyncComponent({
  loader: () => import("../components/Home/SectionTable.vue"),
  loadingComponent: Loading,
  delay: 700,
  timeout: 5000,
});

const btnIcon = computed(() => {
  return new URL("../assets/images/plus-solid.svg", import.meta.url).href;
});
</script>
<template>
  <Layout>
    <template>
      <Modal />
    </template>
    
    <Table />
    <section class="button-bar">
      <Button class="btn-secondary btn-pad" :type="'button'"
        ><img :src="btnIcon" width="25" height="25"
      /></Button>
    </section>
  </Layout>
</template>
<style scoped lang="scss">
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
