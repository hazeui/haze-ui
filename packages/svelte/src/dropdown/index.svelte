<script lang="ts">
  import { clickOutside } from ".././domutils";
  import type { PassedProps } from "./types";

  let { children } = $props();
  let open = $state(false);
  import { setContext } from "svelte";

  const toggleDropdown = () => open = !open;
  const closeDropdown = () => open = false;

  const context: PassedProps = {
    open: () => open,
    toggleDropdown,
    closeDropdown,
  };

  setContext("dropdown", context);
</script>

<div
  class="relative inline-block"
  use:clickOutside={closeDropdown}
>
  {@render children?.()}
</div>
