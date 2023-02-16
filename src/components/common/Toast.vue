<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
  <div class="toast-container position-fixed bottom-0 p-3 fade-in">
    <div class="toast show">
      <div class="toast-header">
        <strong class="me-auto">Ops...</strong>
        <Button
          :fn-button="() => null"
          :type="'button'"
          class="btn-close"
        ></Button>
      </div>
      <div class="toast-body">Something went wrong, please try again</div>
    </div>
  </div>
</template>
