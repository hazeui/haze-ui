import React, { useState, useContext, createContext } from "react";
import { useEffect, useRef } from "react";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { useOnClickOutside } from "./domutils";

type CtxProps = {
  open: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

const context = createContext<CtxProps | null>(null);

export const DropdownTrigger = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { toggleDropdown } = useContext(context) as CtxProps;

  return (
    <button
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
  const { open } = useContext(context) as CtxProps;
  const popoverRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const getFocusableElements = (): HTMLElement[] => {
    if (!popoverRef.current) return [];
    return Array.from(popoverRef.current.querySelectorAll('[role="menuitem"]'));
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
    if (open && popoverRef.current) popoverRef.current.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={
        className.includes("popover") ? className : `popover ${className}`
      }
      onKeyDown={handleKeyDown}
      ref={popoverRef}
      role="menu"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export const Dropdown = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  useOnClickOutside(ref, closeDropdown);

  const ctxValue: CtxProps = { open, toggleDropdown, closeDropdown };
  return (
    <context.Provider value={ctxValue}>
      <div className="relative inline-block" ref={ref}>
        {children}
      </div>
    </context.Provider>
  );
};
