<script setup lang="ts">
import { ButtonType } from '../../modules/types'

interface ButtonModel<T> {
    fnButton?(params: T): T;
    type: ButtonType;
}
const props = defineProps<ButtonModel<unknown>>();
</script>
<template>

    <template v-if="props.type === 'submit'">
        <button :type="props.type" @click.prevent="props.fnButton" class="btn">
            <slot></slot>
        </button>
    </template>

    <template v-else>
        <button :type="props.type" @click="props.fnButton" class="btn">
            <slot></slot>
        </button>
    </template>
</template>