import { useEffect, useRef, useState, KeyboardEvent, ReactNode } from "react";
import { useOnClickOutside } from "./domutils";
import { createPortal } from "react-dom";

interface DropdownProps {
  children: [ReactNode, ReactNode];
}

export default ({ children }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => {
    if (isOpen) setIsOpen(false);
  };

  const getFocusableElements = (): HTMLElement[] => {
    if (!ref.current) return [];
    return Array.from(
      ref.current.querySelectorAll<HTMLElement>('[role="menuitem"]'),
    );
  };

  const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex =
        focusedIndex < focusableElements.length - 1 ? focusedIndex + 1 : 0;
      setFocusedIndex(nextIndex);
      focusableElements[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        focusedIndex > 0 ? focusedIndex - 1 : focusableElements.length - 1;
      setFocusedIndex(prevIndex);
      focusableElements[prevIndex]?.focus();
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    const closable = ref.current.querySelectorAll<HTMLElement>(
      "[data-onclose='true']",
    );

    closable.forEach((el) => el.addEventListener("click", closeDropdown));

    return () => {
      closable.forEach((el) => el.removeEventListener("click", closeDropdown));
    };
  }, [isOpen]);

  useOnClickOutside(ref, closeDropdown);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onKeyDown={handleKeydown}
      tabIndex={0}
      role="button"
    >
      <div onClick={toggleDropdown}>{children[0]}</div>
      {createPortal(isOpen && children[1], document.body)}
    </div>
  );
};
