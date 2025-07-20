<script lang="ts">
  import { clickOutside } from "./domutils";
  import Btn from "./button.svelte";
  import type { Props as BtnProps } from "./button.svelte";

  type Option = {
    val: string;
    name: string;
    iconL?: string;
  };

  type CustomSelectProps = {
    options: Option[];
    onChange?: (val: string) => void;
    triggerProps?: BtnProps;
    dropdownCss?: string;
    inactiveOptionCss?: string;
    activeOptionCss?: string;
  };

  let {
    options,
    onChange,
    triggerProps,
    dropdownCss,
    inactiveOptionCss,
    activeOptionCss,
  }: CustomSelectProps = $props();

  let isOpened = $state(false);
  let selectedIndex = $state(0);
  let hlIndex = $state(0);

  const toggleOptions = () => {
    isOpened = !isOpened;
    if (isOpened) {
      hlIndex = selectedIndex; // highlight current on open
    }
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    if (index !== selectedIndex) {
      selectedIndex = index;
      onChange?.(options[index].val);
    }
    isOpened = false;
  };

  const handleListKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(hlIndex);
        break;
      case "Escape":
        e.preventDefault();
        isOpened = false;
        break;
      case "ArrowUp":
        e.preventDefault();
        hlIndex = hlIndex > 0 ? hlIndex - 1 : options.length - 1;
        break;
      case "ArrowDown":
        e.preventDefault();
        hlIndex = hlIndex < options.length - 1 ? hlIndex + 1 : 0;
        break;
      default:
        break;
    }
  };
</script>

<div
  class="relative"
  use:clickOutside={() => isOpened = false}
>
  <Btn
    aria-haspopup="listbox"
    aria-expanded={isOpened}
    onclick={toggleOptions}
    onkeydown={handleListKeyDown}
    iconR="ml-auto i-fa-solid:caret-down"
    variant="outline"
    class="w-full justify-start"
    txt={options[selectedIndex]?.name || "Select"}
    {...triggerProps}
  />
  {#if isOpened}
    <ul
      class={`popover z-10 w-full ${dropdownCss || ""}`}
      role="listbox"
      aria-activedescendant={`option-${hlIndex}`}
      tabindex={-1}
    >
      {#each options as option, i (option.val)}
        <li
          id={`option-${i}`}
          role="option"
          aria-selected={selectedIndex === i}
          tabindex={-1}
          onclick={() => setSelectedThenCloseDropdown(i)}
          onkeydown={() => null}
          class={`justify-start btn-ghost-eqmd transition-none
               ${inactiveOptionCss || ""} 
                ${
            hlIndex === i ? `bg-slate1 ${activeOptionCss || ""}` : ""
          }`}
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
