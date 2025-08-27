<script lang="ts" setup>
import { inject } from "vue";

import type { CtxProps } from "./types";

let { value } = defineProps<{ value: string }>();

const ctx = inject("tabs") as CtxProps;
const setActiveTab = () => ctx.setValue(value);

ctx.addTabLabel(value);
</script>

<template>
  <button
    role="tab"
    @click="setActiveTab"
    :aria-selected="ctx.value.value == value"
  >
    <slot />
  </button>
</template>
