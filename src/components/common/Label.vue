<script setup lang="ts">

interface LabelModel {
    for?: string;
}

const props = defineProps<LabelModel>();
</script>
<template>
    <label :for="props.for">
        <slot></slot>
    </label>
</template>