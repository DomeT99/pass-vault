<script setup lang="ts">
// @ts-nocheck

interface TextareaModel {
  placeHolder?: string;
  rows?: number;
  resize?: boolean;
}

const props = defineProps<TextareaModel>();

//Instance of the value emitted to the parent component
defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    :class="{ 'no-resize': !props.resize }"
    :placeholder="props.placeHolder"
    :rows="props.rows ?? 5"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
<style scoped>
.no-resize {
  resize: none;
}
</style>
