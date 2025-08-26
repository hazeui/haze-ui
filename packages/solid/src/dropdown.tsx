import {
  createSignal,
  createContext,
  useContext,
  createEffect,
  Show,
  type JSX,
} from "solid-js";

import { Portal } from "solid-js/web";

import { type ComponentProps } from "solid-js";

type CtxProps = {
  nested?: boolean;
  opened: () => boolean;
  toggle: () => void;
  close: () => void;
  ref: HTMLButtonElement | undefined;
};

const context = createContext<CtxProps>();

export const DropdownTrigger = (props: ComponentProps<"button">) => {
  const ctx = useContext(context) as CtxProps;

  return (
    <button
      ref={ctx.ref}
      class={props.class?.includes("btn") ? props.class : `btn ${props.class}`}
      onClick={ctx.toggle}
      tabindex={0}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const DropdownItem = (props: ComponentProps<"button">) => {
  const ctx = useContext(context) as CtxProps;
  return (
    <button
      class={`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${props.class}`}
      onClick={ctx.close}
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
  let popupRef: HTMLUListElement | undefined;
  const ctx = useContext(context) as CtxProps;
  const [popcss, setPopcss] = createSignal("");

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

      left =
        window.scrollX + rect.left + rect.width + (ctx.nested ? 2 : 1) * 10;
    }

    setPopcss(`min-width: ${rect.width}px; top: ${top}px;
               left: ${left}px; transform-origin: ${transformOrigin}`);
  };

  createEffect(() => {
    if (!ctx.opened() || !popupRef) return;

    popupRef.focus();

    const popupHeight = popupRef.getBoundingClientRect().height;
    updatePos(popupHeight);

    const outsideClick = (e: MouseEvent) => {
      const elements = [popupRef, ctx.ref];
      const target = e.target as Node;
      const clickedInside = elements.some((el) => el && el.contains(target));

      if (!clickedInside) ctx.close();
    };

    document.body.addEventListener("click", outsideClick);

    window.addEventListener("resize", () => updatePos(popupHeight));

    return () => {
      window.removeEventListener("resize", () => updatePos(popupHeight));
      document.body.removeEventListener("click", outsideClick);
    };
  });

  return (
    <Show when={ctx.opened()}>
      <Portal>
        <ul ref={popupRef} class="pop grid p2" role="menu" style={popcss()}>
          {props.children}
        </ul>
      </Portal>
    </Show>
  );
};

export const Dropdown = (props: any) => {
  const [opened, setOpen] = createSignal(false);

  let ref: HTMLButtonElement | undefined;

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  const ctxValue: CtxProps = {
    opened,
    ref,
    nested: props.nested,
    toggle: toggle,
    close: close,
  };

  return <context.Provider value={ctxValue}>{props.children}</context.Provider>;
};
