import { createSignal, For } from "solid-js";
import Btn from "./button";
import type { Props as BtnProps } from "./button";
import { clickOutside } from "./domutils";

type Option = {
  val: string;
  name: string;
  iconL?: string;
};

type Props = {
  options: Option[];
  onChange?: (val: string) => void;
  triggerProps?: BtnProps;
  dropdownCss?: string;
  inactiveOptionCss?: string;
  activeOptionCss?: string;
};

export default function CustomSelect(props: Props) {
  let ref;
  const [isOpened, setIsOpened] = createSignal(false);
  const [selectedIndex, setSelectedIndex] = createSignal(0);
  const [hlIndex, setHlIndex] = createSignal(0);

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
      props.onChange?.(props.options[index].val);
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

  return (
    <div class="relative w-full" ref={ref} use:clickOutside={close}>
      <Btn
        aria-haspopup="listbox"
        aria-expanded={isOpened()}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        iconR="ml-auto i-fa-solid:caret-down"
        variant="outline"
        class="w-full justify-start"
        txt={props.options[selectedIndex()]?.name || "Select"}
        {...props.triggerProps}
      />
      {isOpened() && (
        <ul
          class={`popover z-10 w-full ${props.dropdownCss || ""}`}
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
                class={`justify-start btn-ghost-eqmd transition-none ${props.inactiveOptionCss || ""} 
                          ${hlIndex() === i() ? `bg-slate1 ${props.activeOptionCss || ""}` : ""}`}
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
