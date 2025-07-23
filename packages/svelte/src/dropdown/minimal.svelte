<script lang="ts">
  import { onMount } from "svelte";
  import { clickOutside } from ".././domutils";

  let { trigger, content } = $props();
  let isOpen = $state(false);
  let ref: HTMLDivElement;
  let focusedIndex = $state(-1);

  const toggleDropdown = () => isOpen = !isOpen;
  const closeDropdown = () => {
    if (isOpen) isOpen = false;
  };

  const getFocusableElements = (): HTMLElement[] => {
    return Array.from(ref.querySelectorAll('[role="menuitem"]'));
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isOpen) return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    if (e.key == "ArrowDown") {
      e.preventDefault();
      focusedIndex = focusedIndex < focusableElements.length - 1
        ? focusedIndex + 1
        : 0;
      focusableElements[focusedIndex]?.focus();
    } //
    else if (e.key == "ArrowUp") {
      e.preventDefault();
      focusedIndex = focusedIndex > 0
        ? focusedIndex - 1
        : focusableElements.length - 1;
      focusableElements[focusedIndex]?.focus();
    }
  };

  onMount(() => {
    const closeEls = ref.querySelectorAll("[data-onclose='true']");
    const handleClose = () => closeDropdown();
    closeEls?.forEach((el) => {
      el.addEventListener("click", handleClose);
    });

    return () => {
      closeEls.forEach((el) => {
        el.removeEventListener("click", handleClose);
      });
    };
  });
</script>

<div
  bind:this={ref}
  class="relative inline-block"
  onkeydown={handleKeydown}
  tabindex="0"
  role="button"
  use:clickOutside={closeDropdown}
>
  {@render trigger({ onclick: toggleDropdown })}
  {#if isOpen}
    {@render content()}
  {/if}
</div>
