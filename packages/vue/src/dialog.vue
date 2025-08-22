<script setup lang="ts">
import type { DialogProps } from "types/dialog";
import { type DialogHTMLAttributes } from "vue";

type Props = DialogProps & /* @vue-ignore */ DialogHTMLAttributes & {
  class: string;
};

const { open, close, class: css = "", closeIcon = true } = defineProps<Props>();

const onClick = (e: MouseEvent) => {
  if (e.currentTarget == e.target) close();
};
</script>

<template>
  <Teleport to="body">
    <dialog
      v-if="open"
      class="backdrop:bg-black/60"
      @click="onClick"
      @close="close"
      @vue:mounted="$event.el.showModal()"
    >
      <div :class="`dialog ${css}`">
        <button
          v-if="closeIcon"
          class="i-pajamas:close absolute right-4 top-4 focus-visible:bg-red"
          aria-label="close"
          @click="close"
          tabindex="-1"
        >
        </button>
        <slot />
      </div>
    </dialog>
  </Teleport>
</template>
