<script lang="ts">
  import { clickOutside } from "./domutils";
  import Btn from "./button.svelte";

  import type { SelectProps } from "types/select";

  let {
    options,
    onChange,
    placeholder = "Select Option",
    triggerProps,
    dropdownCss,
    optionCss,
  }: SelectProps = $props();

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
    isOpened = false;
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
</script>

<div
  class="relative inline-flex first:children:w-full"
  use:clickOutside={() => isOpened = false}
>
  <Btn
    aria-haspopup="listbox"
    aria-expanded={isOpened}
    onclick={toggleOptions}
    onkeydown={handleListKeyDown}
    iconR="ml-auto i-fa-solid:caret-down"
    txt={options[selectedIndex]?.name || placeholder}
    {...triggerProps}
  />

  {#if isOpened}
    <ul
      class={`popover z-10 whitespace-nowrap ${dropdownCss}`}
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
</div>
