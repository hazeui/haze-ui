<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { PassedProps } from "./types";

  let ctx = getContext("dropdown") as PassedProps;

  let { children, class: css, ...rest }: HTMLButtonAttributes = $props();
</script>

<button
  bind:this={ctx.ref}
  class={css?.includes("btn") ? css : `btn ${css}`}
  onclick={ctx.toggleDropdown}
  {...rest}
>
  {@render children?.()}
</button>
