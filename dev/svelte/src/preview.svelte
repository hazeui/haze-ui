<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    code: string;
    showCode: boolean;
    children: Snippet;
  }

  let { code, showCode, children }: Props = $props();

  let toggle = $state(showCode);
</script>

<div class="bordered p5 grid gap5">
  <button onclick={() => toggle = !toggle} class="btn w-fit">
    > Show Code : {String(toggle)}
  </button>

  {#if toggle}
    <pre>{code}</pre>
  {:else}
    {@render children()}
  {/if}
</div>
