<script setup lang="ts">
/**Generic button component */

//Types
import { ButtonType } from '../../modules/types'

//Interface to describe the component's props
interface ButtonModel<T> {
    fnButton(params?: T): T;
    type: ButtonType;
}

//Instance of props
const props = defineProps<ButtonModel<unknown>>();
</script>
<template>

    <template v-if="props.type === 'submit'">
        <button :type="props.type" @click.prevent="props.fnButton()" class="btn">
            <slot></slot>
        </button>
    </template>

    <template v-else>
        <button :type="props.type" @click="props.fnButton()" class="btn">
            <slot></slot>
        </button>
    </template>
</template>