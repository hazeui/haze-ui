<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { CtxProps } from "./index.svelte";

  let { children, value } = $props();

  const { active, setActive, addTabLabel } = getContext("tabs") as CtxProps;
  const setActiveTab = () => setActive(value);

  onMount(() => addTabLabel(value));
</script>

<button
  role="tab"
  onclick={setActiveTab}
  aria-selected={active() == value}
  class={`btn-ghost ${active() == value ? "btn-soft" : ""}`}
>
  {@render children()}
</button>
