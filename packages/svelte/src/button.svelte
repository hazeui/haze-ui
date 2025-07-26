<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { BtnProps } from "types/button";

  type Props = BtnProps & HTMLButtonAttributes;

  let {
    txt,
    iconL,
    iconR,
    loading,
    loaderTxt,
    class: myclass,
    ...x
  }: Props = $props();

  const css = `${myclass?.includes("btn-") ? "" : "btn-soft"} ${myclass}`;
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
