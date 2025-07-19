import { useEffect } from "react";

export const useOnClickOutside = (
  element: React.RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!element.current) return;
      if (!element.current.contains(e.target as Node)) callback();
    };

    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [element, callback]);
};
