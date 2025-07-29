<script lang="ts">
  import type { PassedProps } from "./types";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { getContext } from "svelte";

  let { children, class: css, ...rest }: HTMLButtonAttributes = $props();
  const { closeDropdown } = getContext("dropdown") as PassedProps;
</script>

<button
  onclick={closeDropdown}
  class={`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${css}`}
  role="menuitem"
  {...rest}
>
  {@render children?.()}
</button>
