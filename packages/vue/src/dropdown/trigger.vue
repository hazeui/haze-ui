<script setup lang="ts">
import { type ButtonHTMLAttributes, inject } from "vue";
import type { PassedProps } from "./types";

let ctx = inject("dropdown") as PassedProps;

let { class: css = "" } = defineProps</* @vue-ignore */ ButtonHTMLAttributes>();
</script>

<template>
  <button
    :ref="ctx.btnref"
    :class='`${css?.includes("btn") ? "" : "btn"} ${css}`'
    @click="ctx.toggleDropdown"
  >
    <slot />
  </button>
</template>
