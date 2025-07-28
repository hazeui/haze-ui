import { useRef, useEffect } from "react";
import { type DialogProps } from "types/dialog";
import type { SyntheticEvent, KeyboardEvent } from "react";
import { createPortal } from "react-dom";

type Props = DialogProps & React.HTMLAttributes<HTMLElement>;

export default ({ open, close, children, ...rest }: Props) => {
  if (!open) return null;

  const ref = useRef<HTMLDialogElement>(null); // ✅ fixed

  useEffect(() => {
    if (open && ref.current) {
      ref.current.showModal(); // ✅ use .current
    }
  }, [open]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = ref.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation();

  return createPortal(
    <dialog ref={ref} className="backdrop:bg-black/60" onClick={close}>
      <div
        role="dialog"
        onKeyDown={handleKeyDown} // ✅ fixed camelCase
        className={`dialog ${rest.className || ""}`}
        onClick={stopPropagation}
      >
        {rest.closeIcon && (
          <button
            className="i-pajamas:close absolute right-4 top-4 focus-visible:bg-red"
            aria-label="close"
            onClick={close}
            tabIndex={-1}
          ></button>
        )}
        {children}
      </div>
    </dialog>,
    document.body,
  );
};
