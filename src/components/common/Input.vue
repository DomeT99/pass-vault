<script setup lang="ts">
/**Generic input component */

// @ts-nocheck

//Types
import { InputType } from "../../modules/types";

//Interface to describe the component's props
interface Input {
  type?: InputType;
  id?: string;
  placeHolder?: string;
  disable?: boolean;
  value: string;
}

//Instance of the value emitted to the parent component
defineEmits(["update:modelValue"]);

//Instance of props
const props = defineProps<Input>();
</script>

<template>
  <input
    :value="props.value"
    :placeholder="props.placeHolder"
    :id="props.id"
    :type="props.type ?? 'text'"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
