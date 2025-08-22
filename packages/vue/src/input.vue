<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";
import type { InputProps } from "types/input";

type Props = InputProps & /* @vue-ignore */ InputHTMLAttributes;

const { class: css = "", iconL, iconR } = defineProps<Props>();
</script>

<template>
  <div :class="css?.includes('grinput') ? css : `grinput ${css}`">
    <div v-if="iconL" :class="iconL" />
    <input v-bind="$attrs" />
    <div v-if="iconR" :class="iconR" />
  </div>
</template>
