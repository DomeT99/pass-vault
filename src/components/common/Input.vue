<script setup lang="ts">
// @ts-nocheck
import { InputType } from '../../modules/types';

interface InputModel {
    type?: InputType;
    id?: string;
    placeHolder?: string;
}
defineEmits(["update:modelValue"]);
const props = defineProps<InputModel>();
</script>

<template>
    <input :placeholder="props.placeHolder" :id="props.id" :type="props.type ?? 'text'"
        @input="$emit('update:modelValue', $event.target.value)" />
</template>