<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import { onMounted, ref, Teleport } from "vue";
import type { SelectProps } from "types/select";
import { flip, offset, shift, useFloating } from "@floating-ui/vue";

import { vClickOutside } from "./domutils";

type Props = Omit<SelectProps, "triggerProps"> & {
  triggerProps?: ButtonHTMLAttributes;
};

let {
  options,
  onChange,
  placeholder = "Select Option",
  triggerProps = {},
  dropdownCss,
  optionCss,
} = defineProps<Props>();

const isOpened = ref(false);
const selectedIndex = ref(-1);
const hlIndex = ref(-1);

const closeMe = () => {
  if (isOpened.value) isOpened.value = false;
};

const toggleOptions = () => {
  isOpened.value = !isOpened.value;
  if (isOpened.value) {
    hlIndex.value = selectedIndex.value; // highlight current on open
  }
};

const setSelectedThenCloseDropdown = (index: number) => {
  if (index !== selectedIndex.value) {
    selectedIndex.value = index;
    onChange?.(options[index].value);
  }
  isOpened.value = !isOpened.value;
};

const handleListKeyDown = (e: KeyboardEvent) => {
  e.preventDefault();
  switch (e.key) {
    case "Enter":
      setSelectedThenCloseDropdown(hlIndex.value);
      break;
    case "Escape":
      closeMe();
      break;
    case "ArrowUp":
      hlIndex.value = hlIndex.value > 0 ? hlIndex.value - 1 : 0;
      break;
    case "ArrowDown":
      hlIndex.value = hlIndex.value < options.length - 1
        ? hlIndex.value + 1
        : 0;
      break;
    default:
      break;
  }
};

const activeCss = optionCss?.includes("data-")
  ? optionCss
  : `data-active:bg-muted ${optionCss}`;

const optcss = `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

let trigref = ref(null);
let popupRef = ref(null);

const { floatingStyles } = useFloating(trigref, popupRef, {
  placement: "bottom-start",
  transform: false,
  middleware: [offset(10), flip(), shift()],
});

let { class: trigcss = "" } = triggerProps;

trigcss = trigcss + (trigcss.includes("btn-") ? "" : " btn") +
  " justify-between";

onMounted(() => {
  window.addEventListener("resize", closeMe);

  return () => {
    console.log("bruh!");
    window.removeEventListener("resize", closeMe);
  };
});
</script>

<template>
  <button
    ref="trigref"
    v-click-outside="closeMe"
    aria-haspopup="listbox"
    :aria-expanded="isOpened"
    @click="toggleOptions"
    @keydown="handleListKeyDown"
    :class="trigcss"
    v-bind="triggerProps"
  >
    {{ options[selectedIndex]?.name || placeholder }}
    <i class="i-fa-solid:caret-down"></i>
  </button>

  <Teleport to="body">
    <ul
      v-if="isOpened"
      ref="popupRef"
      use:portal
      class="pop grid p2"
      role="listbox"
      :aria-activedescendant="`option-${hlIndex}`"
      tabindex="{-1}"
      :style='{ ...floatingStyles, minWidth: trigref?.offsetWidth + "px" }'
    >
      <li
        v-for="(option, i) in options"
        :key="option.value"
        :id="`option-${i}`"
        role="option"
        :aria-selected="selectedIndex === i"
        tabindex="-1"
        @click="() => setSelectedThenCloseDropdown(i)"
        @keydown="() => {}"
        :data-active="hlIndex === i"
        :class="optcss"
      >
        <span v-if="option.iconL" :class="option.iconL"></span>
        {{ option.name }}
      </li>
    </ul>
  </Teleport>
</template>
