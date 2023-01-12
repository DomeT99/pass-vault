<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
  <div class="modal fade show d-block bg-modal" tabindex="1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center">
          <h2 class="modal-title">Modal title</h2>
        </div>
        <div class="modal-body d-flex justify-content-center">...</div>
        <div class="modal-footer d-flex justify-content-center">
          <Button class="btn-fifth" :type="'button'">No</Button>
          <Button class="btn-primary" :type="'button'">Yes</Button>
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
