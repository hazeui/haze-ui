<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { type InputProps as Props } from "types/input";

  let { iconL, iconR, class: css = "", ...x }: Props = $props();
</script>

<div class={css?.includes("grinput") ? css : `grinput ${css}`}>
  {#if iconL}
    {#if typeof iconL === "string"}
      <div class={iconL}></div>
    {:else}
      {@render iconL()}
    {/if}
  {/if}

  <input {...x} />

  {#if iconR}
    {#if typeof iconR === "string"}
      <div class={iconR}></div>
    {:else}
      {@render iconR()}
    {/if}
  {/if}
</div>
