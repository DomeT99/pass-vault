<script setup lang="ts">
import { computed } from "vue";

let dateNow = computed(() => {
  return new Date().getFullYear();
});

function openLinkTree() {
  window.open("https://linktr.ee/domenicotenace");
}
</script>
<template>
  <footer class="d-flex justify-content-center py-3 my-4 border-top">
    <p @click="openLinkTree" class="pointer">
      &copy; {{ dateNow }} Domenico Tenace
    </p>
  </footer>
</template>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
