<script setup lang="ts">
import { provide, ref } from "vue";

const props = defineProps<{ nested: boolean }>();

const opened = ref(false);
const btnref = ref(null);

const toggleDropdown = () => opened.value = !opened.value;
const closeDropdown = () => opened.value = false;

provide("dropdown", {
  btnref,
  nested: props.nested,
  opened,
  toggleDropdown,
  closeDropdown,
});
</script>

<template>
  <slot />
</template>
