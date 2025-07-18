<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    txt?: string;
    iconL?: string;
    isLoading?: boolean;
    loaderTxt?: string;
    iconR?: string;
    class?: string;
    variant?: "primary" | "outline" | "soft" | "ghost";
    [x: string]: any;
  }

  let {
    txt,
    iconL,
    iconR,
    isLoading,
    loaderTxt,
    class: myclass,
    variant = "primary",
    ...x
  }: Props = $props();

  const variants: any = {
    primary: "btn-primary",
    soft: "btn-soft",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };

  const css = `${variants[variant]} ${myclass}`;
</script>

<button class={css} {...x}>
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
