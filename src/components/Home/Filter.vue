<script setup lang="ts">
import Input from "../common/Input.vue";
import Button from "../common/Button.vue";
</script>
<template>
  <section class="row g-4">
    <div class="col-md-4 col-lg-5 col-sm-4">
      <Input :place-holder="'Username/Email'" class="form-control filter" />
    </div>
    <div class="col-md-4 col-lg-5 col-sm-4">
      <Input :place-holder="'Site/App'" class="form-control filter" />
    </div>
    <div class="col-md-3 col-lg-2 col-sm-3">
      <Button class="btn-fifth w-100" :type="'button'"
        >Search</Button
      >
    </div>
  </section>
</template>
