import { useEffect } from "react";

export const useOnClickOutside = (
  elements: Array<React.RefObject<HTMLElement | null>>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (elements.some((ref) => ref.current?.contains(e.target as Node))) {
        return;
      }
      callback();
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
  }, [elements, callback]);
};
