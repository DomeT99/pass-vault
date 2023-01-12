<script setup lang="ts">
/**Common footer of the app */

//Vue native modules
import { computed } from "vue";

//Computed props
let dateNow = computed(() => {
  return new Date().getFullYear();
});

//Functions
function openLinkTree() {
  /**This Fn for open the LinkTree link */
  window.open("https://linktr.ee/domenicotenace");
}
</script>
<template>
  <footer class="d-flex justify-content-center py-3 border-top bg-fourth">
    <p @click="openLinkTree" class="pointer">
      &copy; {{ dateNow }} Domenico Tenace
    </p>
  </footer>
</template>
<style scoped>
/**Custom style of component */
.pointer {
  cursor: pointer;
}
p {
  font-size: 1.2rem !important;
}
.border-top {
  border-color: #000 !important;
}
</style>
