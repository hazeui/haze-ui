<script lang="ts">
  import { getContext } from "svelte";
  import type { CtxProps } from "./index.svelte";

  let { children, class: css } = $props();

  const { active, tabLabels, setActive } = getContext("tabs") as CtxProps;

  let activeIndex = $derived(tabLabels().indexOf(active()));

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key == "ArrowLeft" && activeIndex != 0) {
      setActive(tabLabels()[activeIndex - 1]);
    } //

    else if (
      e.key == "ArrowRight" && activeIndex != tabLabels().length - 1
    ) {
      setActive(tabLabels()[activeIndex + 1]);
    }
  };
</script>

<div
  role="tablist"
  class={css?.includes("tabs-") ? css : `tabs ${css}`}
  onkeydown={handleKeyDown}
  tabindex="0"
>
  {@render children()}
</div>
