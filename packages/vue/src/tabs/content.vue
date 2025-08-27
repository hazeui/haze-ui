<script setup lang="ts">
import { inject } from "vue";
import type { CtxProps } from "./types";

type Props = {
  value: string;
  class?: string;
};

const props = defineProps<Props>();
const ctx = inject("tabs") as CtxProps;
</script>

<template>
  <div
    v-if="props.value === ctx.value.value"
    role="tabpanel"
    :class="props.class"
    :aria-labelledby="`tab-${props.value}`"
    :id="`panel-${props.value}`"
  >
    <slot />
  </div>
</template>
