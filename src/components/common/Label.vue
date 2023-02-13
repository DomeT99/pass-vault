<script setup lang="ts">
/**Generic label component */

//Interface to describe the component's props
interface Label {
    for?: string;
}

const props = defineProps<Label>();
</script>
<template>
    <label :for="props.for">
        <slot></slot>
    </label>
</template>