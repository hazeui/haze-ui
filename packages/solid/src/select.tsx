import { onMount, createEffect, createSignal, For, Show } from "solid-js";
import { clickOutside } from "./domutils";
import { type SelectProps } from "types/select";
import { Portal } from "solid-js/web";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

export default (props: SelectProps) => {
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

  const closeMe = () => {
    if (isOpened()) setIsOpened(false);
  };

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
    : `data-active:bg-muted ${props.optionCss}`;

  const optcss = `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

  let { class: trigcss = "" } = props.triggerProps;

  trigcss =
    trigcss + (trigcss.includes("btn-") ? "" : " btn") + " justify-between";

  let ref: HTMLButtonElement | undefined;
  let popupRef: HTMLUListElement | undefined;

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

  createEffect(() => {
    if (isOpened()) updatePosition();
  });

  onMount(() => {
    window.addEventListener("resize", () => closeMe);

    return () => {
      window.removeEventListener("resize", () => closeMe);
    };
  });

  return (
    <>
      <button
        ref={ref}
        use:clickOutside={closeMe}
        aria-haspopup="listbox"
        aria-expanded={isOpened()}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        {...props.triggerProps}
        class={trigcss}
      >
        {props.options[selectedIndex()]?.name || "Select"}
        <i class="i-fa-solid:caret-down" />
      </button>

      <Show when={isOpened()}>
        <Portal>
          <ul
            ref={popupRef}
            class="pop grid p2"
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
        </Portal>
      </Show>
    </>
  );
};
