import React, { useState, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type CtxProps = {
  nested?: boolean | undefined;
  opened: boolean;
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
  let popupRef = useRef<HTMLUListElement>(null);
  const [popcss, setPopcss] = useState({});

  const { ref, opened, nested, closeDropdown } = useContext(
    context,
  ) as CtxProps;

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

    if (nested) {
      toph = canOpenUp ? -popupHeight + rect.height : 0;
      top = rect.top + toph;
      left = window.scrollX + rect.left + rect.width + (nested ? 2 : 1) * 10;
    }

    setPopcss({ minWidth: rect.width, top, left, transformOrigin });
  };

  useEffect(() => {
    if (!opened || !popupRef.current) return;

    const popupHeight = popupRef.current.getBoundingClientRect().height;
    updatePos(popupHeight);
    window.addEventListener("resize", () => updatePos(popupHeight));

    const outsideClick = (e: MouseEvent) => {
      const elements = [popupRef, ref];
      const target = e.target as Node;
      const clickedInside = elements.some(
        (el) => el && el.current.contains(target),
      );

      if (!clickedInside) closeDropdown();
    };

    document.body.addEventListener("click", outsideClick);

    return () => {
      document.body.removeEventListener("click", outsideClick);
      window.removeEventListener("resize", () => updatePos(popupHeight));
    };
  }, [opened]);

  if (!opened) return null;

  return createPortal(
    <ul
      ref={popupRef}
      style={popcss}
      className="absolute min-w-full rounded border bg-secondary brd shadow-md grid p2 animscale"
      role="menu"
      tabIndex={0}
    >
      {children}
    </ul>,
    document.body,
  );
};

export const Dropdown = (props: { children: ReactNode; nested?: boolean }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [opened, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((o) => !o);
  const closeDropdown = () => setOpen(false);

  const ctxValue: CtxProps = {
    opened,
    nested: props.nested,
    toggleDropdown,
    closeDropdown,
    ref,
  };

  return <context.Provider value={ctxValue}>{props.children}</context.Provider>;
};
