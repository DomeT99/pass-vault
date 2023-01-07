<script setup lang="ts">
import Form from '../components/common/Form.vue';
</script>
<template>
  <section class="bg-primary min-vh-100 v-align-center">
    <article class="row-cols-sm-1">
      <div class="col-sm-12 justify-content-center d-flex">
        <Form>
          <div class="mb-3">
            <label for="email" class="form-label text-white">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-4">
            <label for="password" class="form-label text-white">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
          <div class="justify-content-center d-flex">
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </div>
        </Form>
      </div>
    </article>
  </section>
</template>

<style scoped>
.v-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.w-100 {
  width: 100% !important;
}
</style>
