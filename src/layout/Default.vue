<script setup lang="ts">
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <Navbar />
  <section class="min-vh-100">
    <slot></slot>
  </section>
  <Footer />
</template>
