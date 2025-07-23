<script lang="ts">
  import { getContext } from "svelte";
  import type { PassedProps } from "./types";

  interface Props {
    class?: string;
    children?: any;
  }

  let { children, class: css = "" }: Props = $props();

  let focusedIndex = $state(-1);
  let popoverRef: HTMLDivElement | null = $state(null);
  const { open } = getContext("dropdown") as PassedProps;

  const getFocusableElements = (): HTMLElement[] => {
    if (!popoverRef) return [];
    return Array.from(popoverRef.querySelectorAll('[role="menuitem"]'));
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (!open()) return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    if (e.key == "ArrowDown" && focusedIndex < focusableElements.length) {
      e.preventDefault();
      focusedIndex = focusedIndex + 1;
      focusableElements[focusedIndex]?.focus();
    } //
    else if (e.key == "ArrowUp" && focusedIndex > 0) {
      focusedIndex = focusedIndex - 1;
      focusableElements[focusedIndex]?.focus();
    }
  };

  $effect(() => {
    if (open()) popoverRef?.focus();
  });
</script>

{#if open()}
  <div
    class={css.includes("popover") ? css : `popover ${css}`}
    onkeydown={handleKeydown}
    bind:this={popoverRef}
    role="menu"
    tabindex="0"
  >
    {@render children?.()}
  </div>
{/if}
