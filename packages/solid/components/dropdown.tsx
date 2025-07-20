import {
  createSignal,
  createContext,
  useContext,
  createEffect,
  JSX,
} from "solid-js";

type CtxProps = {
  open: () => boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

import { clickOutside } from "./domutils";

const context = createContext<CtxProps>();

export const DropdownTrigger = (props: any) => {
  const ctx = useContext(context) as CtxProps;
  return (
    <button class="btn-primary" onClick={ctx.toggleDropdown} {...props}>
      {props.children}
    </button>
  );
};

export const DropdownItem = (props: any) => {
  const ctx = useContext(context) as CtxProps;
  return (
    <button
      class={`btn-ghost-eqmd justify-start whitespace-nowrap ${props.class || props.className || ""}`}
      onClick={ctx.closeDropdown}
      role="menuitem"
      {...props}
    >
      {props.children}
    </button>
  );
};

export const DropdownContent = (props: {
  class?: string;
  className?: string;
  children?: JSX.Element;
}) => {
  const ctx = useContext(context) as CtxProps;
  let popoverRef: HTMLDivElement;
  const [focusedIndex, setFocusedIndex] = createSignal(-1);

  const getFocusableElements = (): HTMLElement[] => {
    if (!popoverRef) return [];
    return Array.from(popoverRef.querySelectorAll('[role="menuitem"]'));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!ctx.open()) return;

    const focusables = getFocusableElements();
    if (focusables.length === 0) return;

    e.preventDefault();

    if (e.key === "ArrowDown" && focusedIndex() < focusables.length - 1) {
      const next = focusedIndex() + 1;
      setFocusedIndex(next);
      focusables[next]?.focus();
    } //
    else if (e.key === "ArrowUp" && focusedIndex() > 0) {
      const prev = focusedIndex() - 1;
      setFocusedIndex(prev);
      focusables[prev]?.focus();
    }
  };

  createEffect(() => {
    if (ctx.open() && popoverRef) {
      popoverRef.focus();
    }
  });

  const className = props.class || props.className || "";

  return (
    <>
      {ctx.open() && (
        <div
          class={
            className.includes("popover") ? className : `popover ${className}`
          }
          onKeyDown={handleKeyDown}
          ref={popoverRef!}
          role="menu"
          tabIndex={0}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export const Dropdown = (props: any) => {
  const [open, setOpen] = createSignal(false);
  let ref;

  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  const ctxValue: CtxProps = { open, toggleDropdown, closeDropdown };

  return (
    <context.Provider value={ctxValue}>
      <div
        class="relative inline-block"
        ref={ref}
        use:clickOutside={closeDropdown}
      >
        {props.children}
      </div>
    </context.Provider>
  );
};
