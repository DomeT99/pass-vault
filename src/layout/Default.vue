<script setup lang="ts">
import Navbar from '../components/common/Navbar.vue';
</script>

<template>
    <Navbar />
    <section class="min-vh-100">
        <slot></slot>
    </section>
</template>