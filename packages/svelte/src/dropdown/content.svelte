<script lang="ts">
  import { portal } from "../portal";
  import { getContext } from "svelte";
  import type { PassedProps } from "./types";

  interface Props {
    class?: string;
    children?: any;
  }

  let { children, class: css = "" }: Props = $props();
  let popupStyle = $state("");

  let popupRef: HTMLDivElement | null = $state(null);
  let ctx = getContext("dropdown") as PassedProps;

  const updatePos = (popupHeight: number) => {
    if (!ctx.ref) return;

    const rect = ctx.ref.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;

    let toph = canOpenUp ? -popupHeight - rect.height : rect.height;
    let top = rect.top + toph + 10;
    let left = window.scrollX + rect.left;
    let transformOrigin = canOpenUp ? "bottom left" : "top left";

    if (ctx.nested) {
      toph = canOpenUp ? -popupHeight + rect.height : 0;
      top = rect.top + toph;

      left = window.scrollX + rect.left + rect.width +
        (ctx.nested ? 2 : 1) * 10;
    }

    popupStyle = `min-width: ${rect.width}px; top: ${top}px;
               left: ${left}px; transform-origin: ${transformOrigin}`;
  };

  $effect(() => {
    if (!ctx.open() || !popupRef) return;

    const popupHeight = popupRef.getBoundingClientRect().height;
    updatePos(popupHeight);

    const outsideClick = (e: MouseEvent) => {
      const refs = [popupRef, ctx.ref];
      const clickedIn = refs.some((x) => x && x.contains(e.target as Node));
      if (!clickedIn) ctx.closeDropdown();
    };

    document.body.addEventListener("click", outsideClick);

    window.addEventListener("resize", () => updatePos(popupHeight));

    return () => {
      window.removeEventListener("resize", () => updatePos(popupHeight));
      document.body.removeEventListener("click", outsideClick);
    };
  });
</script>

{#if ctx.open()}
  <div
    use:portal
    class="pop grid p2"
    bind:this={popupRef}
    role="menu"
    tabindex="0"
    style={popupStyle}
  >
    {@render children?.()}
  </div>
{/if}
