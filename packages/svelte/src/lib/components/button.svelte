<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    txt?: string;
    iconL?: string;
    isLoading?: boolean;
    loaderTxt?: string;
    iconR?: string;
    disabled?: boolean;
    class?: string;
    variant?: "primary" | "outline" | "alt";
    [x: string]: any;
  }

  let {
    txt,
    iconL,
    iconR,
    isLoading,
    loaderTxt,
    disabled,
    class: myclass,
    variant = "primary",
    ...x
  }: Props = $props();

  const isDisabled = isLoading || disabled;
  const css = `btn-${variant} ${isDisabled ? "muted" : ""} ${myclass}`;
</script>

<button class={css} disabled={isLoading || disabled} {...x}>
  {#if iconL}
    <div class={iconL}></div>
  {/if}

  {#if isLoading}
    <div class="i-eos-icons:loading"></div>
  {/if}

  {#if txt && !isLoading}
    {txt}
  {/if}

  {#if isLoading && loaderTxt}
    {loaderTxt}
  {/if}

  {#if iconR}
    <div class={iconR}></div>
  {/if}
</button>
