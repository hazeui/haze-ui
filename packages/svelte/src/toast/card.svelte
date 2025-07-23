<script lang="ts">
  import { removeToast } from "./utils.svelte";
  import { onMount } from "svelte";
  import Btn from "../button.svelte";

  let { id, title, txt, type, duration = 3000, pos } = $props();

  const css: any = {
    success: {
      icon: "i-mingcute:check-circle-fill text-3xl bg-emerald",
      wrapper: "bg-emerald1",
    },
    warning: {
      icon: "i-ci:circle-warning text-3xl bg-amber",
      wrapper: "bg-amber1",
    },
    error: {
      icon: "i-mi:circle-error text-3xl bg-red",
      wrapper: "bg-red1",
    },
  };

  const closeToast = () => removeToast(id, pos);

  onMount(() => {
    setTimeout(() => removeToast(id, pos), duration);
  });
</script>

<div
  class={`bg-white min-w-md animate-(fade-in-up duration-300)
                  shadow-lg rounded border-(1 solid border) flex gap3 p4 mb3`}
>
  {#if type}
    <div class={`p2 rounded-full my-auto ${css[type].wrapper}`}>
      <div class={css[type].icon}></div>
    </div>
  {/if}

  <div class="grid gap2">
    <b>{title}</b>
    <p class="!m0 text-zinc6">{txt}</p>
  </div>

  <Btn
    iconL="i-pajamas:close"
    variant="ghost"
    class="size-sm p1 absolute right-3"
    onClick={closeToast}
  />
</div>
