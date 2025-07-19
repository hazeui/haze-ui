<script lang="ts">
  import { getContext } from "svelte";
  import type { PassedProps } from "./types";

  const { toggleDropdown } = getContext("dropdown") as PassedProps;

  let { children, ...rest } = $props();
</script>

<button class="btn-primary" onclick={toggleDropdown} {...rest}>
  {@render children?.()}
</button>
