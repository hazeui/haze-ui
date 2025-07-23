<script lang="ts">
  import { portal } from "./portal";

  interface Props {
    open: boolean;
    onClose: () => void;
    children: any;
    class?: string;
  }

  let { open, onClose, class: myclass, children }: Props = $props();
  let ref: HTMLDialogElement;

  $effect(() => {
    ref?.[!open ? "close" : "showModal"]?.();
  });

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  const stopPropagation = (e: Event) => e.stopPropagation();
</script>

<dialog
  class="p0 rounded-xl shadow-lg border-0 backdrop:bg-black/60 animate-(fade-in duration-300)"
  onclick={onClose}
  onkeydown={handleEsc}
  bind:this={ref}
  use:portal
>
  <div
    class={`p-5 bg-white min-w-md ${myclass}`}
    onclick={stopPropagation}
  >
    {@render children?.()}
  </div>
</dialog>
