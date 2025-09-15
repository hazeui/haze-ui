import React, { useState, useContext, createContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { useFloating, shift, flip, offset } from "@floating-ui/react";
import { useOnClickOutside } from "./domutils";

type CtxProps = {
  refs: {
    reference: React.RefObject<HTMLButtonElement | null>;
    floating: React.RefObject<HTMLUListElement | null>;
    setReference: (node: HTMLButtonElement | null) => void;
    setFloating: (node: HTMLUListElement | null) => void;
  };
  floatingStyles: React.CSSProperties;
  nested?: boolean | undefined;
  opened: boolean;
  popcss: React.CSSProperties;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

const context = createContext<CtxProps | null>(null);

export const DropdownTrigger = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { refs, toggleDropdown } = useContext(context) as CtxProps;

  return (
    <button
      ref={refs.setReference}
      className={className?.includes("btn") ? className : `btn ${className}`}
      onClick={toggleDropdown}
      {...rest}
    >
      {children}
    </button>
  );
};

export const DropdownItem = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { closeDropdown } = useContext(context) as CtxProps;

  return (
    <button
      className={`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${className}`}
      onClick={closeDropdown}
      role="menuitem"
      {...rest}
    >
      {children}
    </button>
  );
};

export const DropdownContent = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { refs, opened, nested, closeDropdown, floatingStyles } = useContext(
    context,
  ) as CtxProps;

  // useOnClickOutside([refs.reference, refs.floating], closeDropdown);

  useEffect(() => {
    if (!opened) return;

    const outsideClick = (e: MouseEvent) => {
      const elements = [refs.floating, refs.reference];
      const clickedInside = elements.some((el) =>
        el.current.contains(e.target),
      );

      if (!clickedInside) closeDropdown();
    };

    document.body.addEventListener("click", outsideClick);

    return () => {
      document.body.removeEventListener("click", outsideClick);
      // window.removeEventListener("resize", () => updatePos(popupHeight));
    };
  }, [opened]);

  if (!opened) return null;

  return createPortal(
    <ul
      ref={refs.setFloating}
      className="absolute  rounded border bg-secondary brd shadow-md grid p2 animscale"
      role="menu"
      tabIndex={0}
      style={floatingStyles}
    >
      {children}
    </ul>,
    document.body,
  );
};

export const Dropdown = (props: { children: ReactNode; nested?: boolean }) => {
  const { refs, floatingStyles } = useFloating({
    transform: false,
    placement: props.nested ? "right-start" : "bottom-start",
    middleware: [shift(), flip(), offset(10)],
  });

  const [opened, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  const ctxValue: CtxProps = {
    opened,
    nested: props.nested,
    toggleDropdown,
    closeDropdown,
    refs,
    floatingStyles,
  };

  return <context.Provider value={ctxValue}>{props.children}</context.Provider>;
};
