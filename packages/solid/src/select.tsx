import { onMount, createEffect, createSignal, For, Show } from "solid-js";
import { clickOutside } from "./domutils";
import { type SelectProps } from "types/select";
import { Portal } from "solid-js/web";

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
    : `data-active:bg-muted ${props.optionCss}`;

  const optcss = `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

  let { class: trigcss = "" } = props.triggerProps;

  trigcss =
    trigcss + (trigcss.includes("btn-") ? "" : " btn") + " justify-between";

  let ref: HTMLButtonElement | undefined;
  let popupRef: HTMLUListElement | undefined;
  const [popupCss, setPopupCss] = createSignal("");

  const updatePos = (popupHeight: number) => {
    if (!ref) return;

    const rect = ref.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;
    const toph = canOpenUp ? -popupHeight - 30 : rect.height + 10;
    const top = window.scrollY + rect.top + toph;

    setPopupCss(`min-width: ${rect.width}px; top: ${top}px;
               left: ${window.scrollX + rect.left}px;`);
  };

  createEffect(() => {
    if (isOpened() && popupRef) {
      updatePos(popupRef.getBoundingClientRect().height);
    }
  });

  onMount(() => {
    window.addEventListener("resize", () => setIsOpened(false));

    return () => {
      window.removeEventListener("resize", () => setIsOpened(false));
    };
  });

  return (
    <>
      <button
        ref={ref}
        use:clickOutside={close}
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
            style={popupCss()}
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
