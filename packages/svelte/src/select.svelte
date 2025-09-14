<script lang="ts">
  import { onMount } from "svelte";
  import { clickOutside } from "./domutils";
  import { portal } from "./portal";
  import { type SelectProps as SelProps } from "types/select";
  import type { HTMLButtonAttributes } from "svelte/elements";

  import { computePosition, flip, offset, shift } from "@floating-ui/dom";

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

  const closeMe = () => {
    if (isOpened) isOpened = false;
  };

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
        closeMe();
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

  let { class: trigcss = "" } = triggerProps;

  trigcss = trigcss + (trigcss.includes("btn-") ? "" : " btn") +
    " justify-between";

  const updatePosition = async () => {
    const pos = await computePosition(ref, popupRef, {
      placement: "bottom-start",
      middleware: [offset(10), flip(), shift()],
    });

    Object.assign(popupRef.style, {
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      minWidth: `${ref.offsetWidth}px`,
    });
  };

  $effect(() => {
    if (isOpened) updatePosition();
  });

  onMount(() => {
    window.addEventListener("resize", closeMe);

    return () => {
      window.removeEventListener("resize", closeMe);
    };
  });
</script>

<button
  bind:this={ref}
  aria-haspopup="listbox"
  aria-expanded={isOpened}
  onclick={toggleOptions}
  onkeydown={handleListKeyDown}
  use:clickOutside={closeMe}
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
    class="pop grid p2"
    role="listbox"
    aria-activedescendant={`option-${hlIndex}`}
    tabindex={-1}
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
