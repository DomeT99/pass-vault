<script setup lang="ts">
/**Generic modal component */

//Components
import Button from "./Button.vue";

interface Modal {
  title: string;
  succFunction(): void;
  errorFunction(): void;
}
const props = defineProps<Modal>();
</script>
<template>
  <div class="modal show d-block bg-modal" tabindex="1">
    <div class="modal-dialog modal-dialog-centered fade-in">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center">
          <h2 class="modal-title">{{ props.title }}</h2>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <p><slot></slot></p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <Button
            :fn-button="props.errorFunction"
            class="btn-fifth"
            :type="'button'"
            >No</Button
          >
          <Button
            :fn-button="props.succFunction"
            class="btn-primary"
            :type="'button'"
            >Yes</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-modal {
  background-color: #000000c7;
}
</style>
