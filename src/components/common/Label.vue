<script setup lang="ts">
/**Generic label component */

//Interface to describe the component's props
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