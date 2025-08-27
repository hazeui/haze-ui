<script setup lang="ts">
import { inject, nextTick, onWatcherCleanup, ref, Teleport, watch } from "vue";
import type { HtmlHTMLAttributes } from "vue";
import type { PassedProps } from "./types";

let { class: css = "" } = defineProps</* @vue-ignore */ HtmlHTMLAttributes>();

let popupStyle = ref();
let popupRef = ref(null);
let ctx = inject("dropdown") as PassedProps;

const updatePos = (popupHeight: number) => {
  if (!ctx.btnref.value) return;

  const rect = ctx.btnref.value.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;
  const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;

  let toph = canOpenUp ? -popupHeight - rect.height : rect.height;
  let top = rect.top + toph + 10;
  let left = window.scrollX + rect.left;
  let transformOrigin = canOpenUp ? "bottom left" : "top left";

  if (ctx.nested) {
    toph = canOpenUp ? -popupHeight + rect.height : 0;
    top = rect.top + toph;

    left = window.scrollX + rect.left + rect.width +
      (ctx.nested ? 2 : 1) * 10;
  }

  popupStyle.value = `min-width: ${rect.width}px; top: ${top}px;
               left: ${left}px; transform-origin: ${transformOrigin}`;
};

watch(() => ctx.opened.value, async (x) => {
  await nextTick();

  if (!x || !popupRef) return;

  const popupHeight = popupRef.value.getBoundingClientRect().height;
  updatePos(popupHeight);
  // console.log(popupStyle.value);

  const outsideClick = (e: MouseEvent) => {
    const refs = [popupRef, ctx.btnref];
    const clickedIn = refs.some((x) => x && x.value.contains(e.target as Node));
    if (!clickedIn) ctx.closeDropdown();
  };

  document.body.addEventListener("click", outsideClick);

  window.addEventListener("resize", () => updatePos(popupHeight));

  onWatcherCleanup(() => {
    window.removeEventListener("resize", () => updatePos(popupHeight));
    document.body.removeEventListener("click", outsideClick);
  });
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="ctx.opened.value"
      class="pop grid p2"
      ref="popupRef"
      role="menu"
      tabindex="0"
      :style="popupStyle"
    >
      <slot />
    </div>
  </Teleport>
</template>
