<script lang="ts" setup>
import { computed, inject, watch } from "vue";
import type { CtxProps } from "./types";

const { class: css = "" } = defineProps<{ class?: string }>();

const { value, tabLabels, setValue } = inject("tabs") as CtxProps;

watch(tabLabels.value, () => {
  if (!value.value) {
    setValue(tabLabels.value[0]);
  }
});

let activeIndex = computed(() => tabLabels.value.indexOf(value.value));

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key == "ArrowLeft" && activeIndex.value != 0) {
    setValue(tabLabels.value[activeIndex.value - 1]);
  } //

  else if (
    e.key == "ArrowRight" && activeIndex.value != tabLabels.value.length - 1
  ) {
    setValue(tabLabels.value[activeIndex.value + 1]);
  }
};
</script>

<template>
  <div
    role="tablist"
    tabindex="-1"
    @keydown="handleKeyDown"
    :class='`${css?.includes("tabs-") ? css : "tabs " + css}`'
  >
    <slot />
  </div>
</template>
