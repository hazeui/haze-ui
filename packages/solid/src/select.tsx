import { createSignal, For } from "solid-js";
import Btn from "./button";
import { clickOutside } from "./domutils";
import { type SelectProps } from "types/select";

export default function CustomSelect(props: SelectProps) {
  let ref;
  const [isOpened, setIsOpened] = createSignal(false);
  const [selectedIndex, setSelectedIndex] = createSignal(-1);
  const [hlIndex, setHlIndex] = createSignal(-1);

  const toggleOptions = () => {
    setIsOpened((prev) => {
      const next = !prev;
      if (next) setHlIndex(selectedIndex()); // highlight current on open
      return next;
    });
  };

  const close = () => setIsOpened(false);

  const setSelectedThenCloseDropdown = (index: number) => {
    if (index !== selectedIndex()) {
      setSelectedIndex(index);
      props.onChange?.(props.options[index].value);
    }
    setIsOpened(false);
  };

  const handleListKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
        setSelectedThenCloseDropdown(hlIndex());
        break;
      case "Escape":
        setIsOpened(false);
        break;
      case "ArrowUp":
        setHlIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "ArrowDown":
        setHlIndex((prev) => (prev < props.options.length - 1 ? prev + 1 : 0));
        break;
      default:
        break;
    }
  };

  const activeCss = props.optionCss?.includes("data-")
    ? props.optionCss
    : `data-active:bg-mutedbg ${props.optionCss}`;

  const optcss = `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

  return (
    <div class="relative inline-flex" ref={ref} use:clickOutside={close}>
      <Btn
        aria-haspopup="listbox"
        aria-expanded={isOpened()}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        iconR="ml5 i-fa-solid:caret-down"
        txt={props.options[selectedIndex()]?.name || "Select"}
        {...props.triggerProps}
      />
      {isOpened() && (
        <ul
          class={`popover z-10 whitespace-nowrap ${props.dropdownCss || ""}`}
          role="listbox"
          aria-activedescendant={`option-${hlIndex()}`}
          tabIndex={-1}
        >
          <For each={props.options}>
            {(option, i) => (
              <li
                id={`option-${i()}`}
                role="option"
                aria-selected={selectedIndex() === i()}
                tabIndex={-1}
                onClick={() => setSelectedThenCloseDropdown(i())}
                data-active={hlIndex() === i()}
                class={optcss}
              >
                {option.iconL && <span class={option.iconL}></span>}
                {option.name}
              </li>
            )}
          </For>
        </ul>
      )}
    </div>
  );
}
