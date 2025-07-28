<script lang="ts">
  import { portal } from "./portal";
  import type { HTMLAttributes } from "svelte/elements";
  import type { DialogProps } from "types/dialog";

  type Props = DialogProps & HTMLAttributes<HTMLElement>;

  let { open, close, class: myclass, children, closeIcon = true }: Props =
    $props();

  let ref: HTMLDialogElement = $state();

  const handlekeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = ref.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  const stopPropagation = (e: Event) => e.stopPropagation();

  $effect(() => {
    if (open) ref?.showModal();
  });
</script>

{#if open}
  <dialog
    class="backdrop:bg-black/60"
    use:portal
    bind:this={ref}
    onclick={close}
  >
    <div
      role="dialog"
      tabindex="-1"
      onkeydown={handlekeydown}
      class={`dialog ${myclass}`}
      onclick={stopPropagation}
    >
      {#if closeIcon}
        <button
          class="i-pajamas:close absolute right-4 top-4 focus:bg-red"
          aria-label="close"
          onclick={close}
          tabindex="-1"
        >
        </button>
      {/if}

      {@render children()}
    </div>
  </dialog>
{/if}
