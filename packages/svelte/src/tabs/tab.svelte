<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { CtxProps } from "./index.svelte";

  let { children, value } = $props();

  const { value: active, setValue, addTabLabel } = getContext(
    "tabs",
  ) as CtxProps;

  const setActiveTab = () => setValue(value);

  onMount(() => addTabLabel(value));
</script>

<button
  role="tab"
  onclick={setActiveTab}
  aria-selected={active() == value}
>
  {@render children()}
</button>
