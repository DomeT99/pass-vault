<script setup lang="ts">
/**Default layout that used in all pages of the app */

//Components
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
