<script setup lang="ts">
// @ts-nocheck

//Interface to describe the component's props
interface Textarea {
  placeHolder?: string;
  rows?: number;
  resize?: boolean;
  value: string;
}

const props = defineProps<Textarea>();

//Instance of the value emitted to the parent component
defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    :value="props.value"
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
