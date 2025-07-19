<script lang="ts">
  import type { PassedProps } from "./types";
  import { getContext } from "svelte";
  
  interface Props {
    class?: string;
    children?: any;
  }
  
  let { children, class: css, ...rest }: Props = $props();
  const { closeDropdown } = getContext("dropdown") as PassedProps;
</script>

<button
  onclick={closeDropdown}
  class={`btn-ghost-eqmd justify-start whitespace-nowrap ${css}`}
  role="menuitem"
  {...rest}
>
  {@render children?.()}
</button>
