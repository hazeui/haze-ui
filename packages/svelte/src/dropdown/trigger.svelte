<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { PassedProps } from "./types";

  const { toggleDropdown } = getContext("dropdown") as PassedProps;

  let { children, class: css, ...rest }: HTMLButtonAttributes = $props();
</script>

<button
  class={css?.includes("btn") ? css : `btn ${css}`}
  onclick={toggleDropdown}
  {...rest}
>
  {@render children?.()}
</button>
