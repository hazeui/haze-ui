<script setup lang="ts">
import { type ButtonHTMLAttributes, inject } from "vue";
import type { PassedProps } from "./types";

let ctx = inject("dropdown") as PassedProps;
let { class: css = "" } = defineProps</* @vue-ignore */ ButtonHTMLAttributes>();
</script>

<template>
  <button
    role='menuitem'
    :class="`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${css}`"
    @click="ctx.closeDropdown"
  >
    <slot />
  </button>
</template>
