<script lang="ts">
  import { portal } from "./portal";
  import type { HTMLAttributes } from "svelte/elements";
  import type { DialogProps } from "types/dialog";

  type Props = DialogProps & HTMLAttributes<HTMLElement>;

  let { open, close, class: myclass, children, closeIcon = true }: Props =
    $props();

  let ref: HTMLDialogElement = $state();

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
      tabindex="-1"
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
