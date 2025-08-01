<script lang="ts">
  import { removeToast } from "./utils.svelte";
  import { onMount } from "svelte";
  import type { ToastObj } from "types/toast";

  let { pos, icon = $bindable(), css = "", ...rest }: ToastObj = $props();

  const icons: any = {
    success: "i-mingcute:check-circle-fill",
    warning: "i-jam:info-f",
    danger: "i-mi:circle-error",
  };

  const closeToast = () => removeToast(rest.id, pos);

  const match = css?.match(/\b\S*toast\S*(danger|success|warning)\S*\b/);

  if (!icon && match && match[0]) {
    const tmp = match[0].split("-");
    icon = icons[tmp.at(-1)];
  }

  onMount(() => {
    setTimeout(() => removeToast(rest.id, pos), rest.duration || 3000);
  });
</script>

<div
  class={css.includes("toast") ? css : `toast ${css}`}
>
  {#if icon}
    <div class={icon + " my-auto text-3xl"}></div>
  {/if}

  <div class="grid gap1">
    <b>{rest.title}</b>
    <span>{rest.txt}</span>
  </div>

  <button
    aria-label="close"
    class="btn-ghost-eqsm absolute right-2 top-2"
    onclick={closeToast}
  >
    <span class="i-pajamas:close"></span>
  </button>
</div>
