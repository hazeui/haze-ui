import React, { useState, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { useOnClickOutside } from "./domutils";

type CtxProps = {
  open: boolean;
  popcss: React.CSSProperties;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  ref: React.RefObject<HTMLButtonElement | null>;
  popupRef: React.RefObject<HTMLUListElement | null>;
};

const context = createContext<CtxProps | null>(null);

export const DropdownTrigger = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { ref, toggleDropdown } = useContext(context) as CtxProps;

  return (
    <button
      ref={ref}
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
  const { open, popupRef, popcss } = useContext(context) as CtxProps;
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const getFocusableElements = (): HTMLElement[] => {
    if (!popupRef.current) return [];
    return Array.from(popupRef.current.querySelectorAll('[role="menuitem"]'));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    const focusables = getFocusableElements();
    if (focusables.length === 0) return;

    if (e.key === "ArrowDown" && focusedIndex < focusables.length - 1) {
      const next = focusedIndex + 1;
      setFocusedIndex(next);
      focusables[next]?.focus();
    } //
    else if (e.key === "ArrowUp" && focusedIndex > 0) {
      const prev = focusedIndex - 1;
      setFocusedIndex(prev);
      focusables[prev]?.focus();
    }
  };

  useEffect(() => {
    // if (open && popoverRef.current) popoverRef.current.focus();
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      ref={popupRef}
      style={popcss}
      className="absolute min-w-full rounded border bg-secondary brd shadow-md grid p2 animscale"
      onKeyDown={handleKeyDown}
      role="menu"
      tabIndex={0}
    >
      {children}
    </div>,
    document.body,
  );
};

export const Dropdown = (props: { children: ReactNode; nested?: boolean }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(false);
  const [popcss, setPopcss] = useState({});

  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  useOnClickOutside([popupRef, ref], closeDropdown);

  const updatePos = (popupHeight: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;
    let toph = canOpenUp ? -popupHeight - rect.height : rect.height;
    let top = rect.top + toph + 10;
    let left = window.scrollX + rect.left;
    let transformOrigin = canOpenUp ? "bottom left" : "top left";

    if (props.nested) {
      toph = canOpenUp ? -popupHeight + rect.height : 0;
      top = rect.top + toph;

      left =
        window.scrollX + rect.left + rect.width + (props.nested ? 2 : 1) * 10;
    }

    setPopcss({ minWidth: rect.width, top, left, transformOrigin });
  };

  useEffect(() => {
    if (!open || !popupRef.current) return;

    const popupHeight = popupRef.current.getBoundingClientRect().height;
    updatePos(popupHeight);
    window.addEventListener("resize", () => updatePos(popupHeight));

    return () => {
      window.removeEventListener("resize", () => updatePos(popupHeight));
    };
  }, [open]);

  const ctxValue: CtxProps = {
    open,
    popcss,
    toggleDropdown,
    closeDropdown,
    ref,
    popupRef,
  };

  return <context.Provider value={ctxValue}>{props.children}</context.Provider>;
};
