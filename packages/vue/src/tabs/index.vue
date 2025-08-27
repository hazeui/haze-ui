<script setup lang="ts">
import type { TabsProps } from "types/tabs";
import { provide, ref } from "vue";

const { defaultValue, value, setValue } = defineProps<TabsProps>();

let active = ref(defaultValue);
let tabLabels = ref<string[]>([]);

const setActive = (x: string) => active.value = x;

provide("tabs", {
  value: value ?? active,
  setValue: setValue ?? setActive,
  tabLabels: tabLabels,
  addTabLabel: (x: string) => tabLabels.value.push(x),
});
</script>

<template>
  <slot />
</template>
