<script lang="ts">
  import { getContext } from "svelte";
  import type { CtxProps } from "./index.svelte";

  let { children, class: css } = $props();

  const { value, tabLabels, setValue } = getContext(
    "tabs",
  ) as CtxProps;

  let activeIndex = $derived(tabLabels().indexOf(value()));

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "ArrowLeft" && activeIndex != 0) {
      setValue(tabLabels()[activeIndex - 1]);
    } //

    else if (
      e.key == "ArrowRight" && activeIndex != tabLabels().length - 1
    ) {
      setValue(tabLabels()[activeIndex + 1]);
    }
  };

  $effect(() => {
    if (!value()) setValue(tabLabels()[0]);
  });
</script>

<div
  role="tablist"
  class={css?.includes("tabs-") ? css : `tabs ${css}`}
  onkeydown={handleKeyDown}
  tabindex="-1"
>
  {@render children()}
</div>
