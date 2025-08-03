<script lang="ts">
  import { portal } from "./portal";
  import type { HTMLAttributes } from "svelte/elements";
  import type { DialogProps } from "types/dialog";

  type Props = DialogProps & HTMLAttributes<HTMLElement>;

  let { class: css, closeIcon = true, ...rest }: Props = $props();

  const onClick = (e: MouseEvent) => {
    if (e.currentTarget == e.target) rest.close();
  };
</script>

{#if rest.open}
  <dialog
    class="backdrop:bg-black/60"
    use:portal
    onclick={onClick}
    onclose={rest.close}
    {@attach (node) => node.showModal()}
  >
    <div tabindex="-1" class={`dialog ${css}`}>
      {#if closeIcon}
        <button
          class="i-pajamas:close absolute right-4 top-4 focus:bg-red"
          aria-label="close"
          onclick={rest.close}
          tabindex="-1"
        >
        </button>
      {/if}

      {@render rest.children()}
    </div>
  </dialog>
{/if}
