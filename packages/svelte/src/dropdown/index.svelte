<script lang="ts">
  import type { PassedProps } from "./types";

  let { children, nested } = $props();
  let open = $state(false);
  let ref: HTMLButtonElement;
  import { setContext } from "svelte";

  const toggleDropdown = () => open = !open;
  const closeDropdown = () => open = false;

  const context: PassedProps = {
    ref,
    nested,
    open: () => open,
    toggleDropdown,
    closeDropdown,
  };

  setContext("dropdown", context);
</script>

{@render children()}
