<script lang="ts">
  import { getContext } from "svelte";
  import type { CtxProps } from "./index.svelte";

  let { children, value, class: css = "" } = $props();

  const { value: active } = getContext("tabs") as CtxProps;
</script>

{#if active() == value}
  <div role="tabpanel" aria-labelledby={`tab-${active()}`} class={css}>
    {@render children()}
  </div>
{/if}
