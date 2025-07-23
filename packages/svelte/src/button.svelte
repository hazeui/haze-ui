<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  import { BtnProps } from "types/button";

  type Props = BtnProps & HTMLButtonAttributes;

  let {
    txt,
    iconL,
    iconR,
    loading,
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

  {#if loading}
    <div class="i-eos-icons:loading"></div>
  {/if}

  {#if txt && !loading}
    {txt}
  {/if}

  {#if loading && loaderTxt}
    {loaderTxt}
  {/if}

  {#if iconR}
    <div class={iconR}></div>
  {/if}
</button>
