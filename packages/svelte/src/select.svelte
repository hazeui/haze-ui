<script lang="ts">
  import { onMount } from "svelte";
  import { clickOutside } from "./domutils";
  import { portal } from "./portal";
  import { type SelectProps as SelProps } from "types/select";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Props = Omit<SelProps, "triggerProps"> & {
    triggerProps?: HTMLButtonAttributes;
  };

  let {
    options,
    onChange,
    placeholder = "Select Option",
    triggerProps = {},
    dropdownCss,
    optionCss,
  }: Props = $props();

  let isOpened = $state(false);
  let selectedIndex = $state(-1);
  let hlIndex = $state(-1);

  const toggleOptions = () => {
    isOpened = !isOpened;
    if (isOpened) {
      hlIndex = selectedIndex; // highlight current on open
    }
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    if (index !== selectedIndex) {
      selectedIndex = index;
      onChange?.(options[index].value);
    }
    isOpened = !isOpened;
  };

  const handleListKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    switch (e.key) {
      case "Enter":
        setSelectedThenCloseDropdown(hlIndex);
        break;
      case "Escape":
        isOpened = false;
        break;
      case "ArrowUp":
        hlIndex = hlIndex > 0 ? hlIndex - 1 : 0;
        break;
      case "ArrowDown":
        hlIndex = hlIndex < options.length - 1 ? hlIndex + 1 : 0;
        break;
      default:
        break;
    }
  };

  const activeCss = optionCss?.includes("data-")
    ? optionCss
    : `data-active:bg-muted ${optionCss}`;

  const optcss =
    `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

  let ref = null;
  let popupRef = $state(null);
  let popupCss = $state("");

  const updatePos = (popupHeight: number) => {
    const rect = ref.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;
    const toph = canOpenUp ? -popupHeight - rect.height + 10 : rect.height;
    const top = rect.top + toph;

    popupCss = `min-width: ${rect.width}px; top: ${top}px;
               left: ${window.scrollX + rect.left}px;`;
  };

  $effect(() => {
    if (isOpened) {
      updatePos(popupRef.getBoundingClientRect().height);
    }
  });

  onMount(() => {
    window.addEventListener("resize", () => isOpened = false);

    return () => {
      window.removeEventListener("resize", () => isOpened = false);
    };
  });

  let { class: trigcss = "" } = triggerProps;

  trigcss = trigcss + (trigcss.includes("btn-") ? "" : " btn") +
    " justify-between";
</script>

<button
  bind:this={ref}
  aria-haspopup="listbox"
  aria-expanded={isOpened}
  onclick={toggleOptions}
  onkeydown={handleListKeyDown}
  use:clickOutside={() => isOpened = false}
  {...triggerProps}
  class={trigcss}
>
  {options[selectedIndex]?.name || placeholder}
  <i class="i-fa-solid:caret-down"></i>
</button>

{#if isOpened}
  <ul
    bind:this={popupRef}
    use:portal
    class={`popover z-10 whitespace-nowrap ${dropdownCss}`}
    role="listbox"
    aria-activedescendant={`option-${hlIndex}`}
    tabindex={-1}
    style={popupCss}
  >
    {#each options as option, i (option.value)}
      <li
        id={`option-${i}`}
        role="option"
        aria-selected={selectedIndex === i}
        tabindex={-1}
        onclick={() => setSelectedThenCloseDropdown(i)}
        onkeydown={() => null}
        data-active={hlIndex === i}
        class={optcss}
      >
        {#if option.iconL}
          <span class={option.iconL}></span>
        {/if}
        {option.name}
      </li>
    {/each}
  </ul>
{/if}
