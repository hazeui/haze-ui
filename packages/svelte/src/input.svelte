<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import { type InputProps } from "types/input";

  type Props = InputProps & HTMLInputAttributes;

  let { iconL, iconR, class: css = "", value = $bindable(), ...x }: Props = $props();
</script>

<div class={css?.includes("grinput") ? css : `grinput ${css}`}>
  {#if iconL}
    {#if typeof iconL === "string"}
      <div class={iconL}></div>
    {:else}
      {@render iconL()}
    {/if}
  {/if}

  <input bind:value {...x} />

  {#if iconR}
    {#if typeof iconR === "string"}
      <div class={iconR}></div>
    {:else}
      {@render iconR()}
    {/if}
  {/if}
</div>
