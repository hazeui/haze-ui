<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { CtxProps } from "./index.svelte";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value: string;
    class?: string;
  };

  let { children, value, ...x }: Props = $props();

  const { value: active } = getContext("tabs") as CtxProps;
</script>

{#if active() == value}
  <div role="tabpanel" aria-labelledby={`tabpanel-${active()}`} {...x}>
    {@render children()}
  </div>
{/if}
