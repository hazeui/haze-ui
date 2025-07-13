<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
	import type { Snippet } from 'svelte';

  interface Props extends HTMLInputAttributes {
    iconL?: string | Snippet;
    iconR?: string | Snippet;
    class?: string;
    parentCss?: string;
    variant?: "outline" | "solid";
    [x: string]: any;
  }

  let {
    iconL,
    iconR,
    disabled,
    class: myclass = "",
    parentCss = "",
    variant = "outline",
    ...x
  }: Props = $props();

  const variants = {
    outline: "outline-(1 solid border)",
    solid: "bg-input",
  };

  const wrapperClass = `bg-bg rounded flex items-center gap1 p1 px3 duration-150
                        focus-within:ring-(2 primary) ${disabled ? "brightness-95" : ""}
                       ${variants[variant]} ${parentCss}`;

  const inputClass = `p2 border-0 outline-0 w-full
                     ${variant === "solid" ? "bg-input" : "bg-bg"} ${myclass}`;

</script>

<div class={wrapperClass}>
  {#if iconL}
    {#if typeof iconL === "string"}
      <div class={iconL}></div>
    {:else}
      {@render iconL()}
    {/if}
  {/if}

  <input {disabled} class={inputClass} {...x} />

  {#if iconR}
    {#if typeof iconR === "string"}
      <div class={iconR}></div>
    {:else}
      {@render iconR()}
    {/if}
  {/if}
</div>
