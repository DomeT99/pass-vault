<script setup lang="ts">
import Button from "./Button.vue";

import { useComponentStore } from "../../store/componentStore";

const componentStore = useComponentStore();
</script>
<template>
  <div class="toast-container position-fixed bottom-0 p-3 fade-in">
    <div class="toast show">
      <div class="toast-header">
        <strong class="me-auto">Ops...</strong>
        <Button
          :fn-button="
            () => (componentStore.isShowToast = !componentStore.isShowToast)
          "
          :type="'button'"
          class="btn-close"
        ></Button>
      </div>
      <div class="toast-body">Something went wrong, please try again</div>
    </div>
  </div>
</template>
