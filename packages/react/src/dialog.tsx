import { useRef, useEffect } from "react";
import { type DialogProps } from "types/dialog";
import type { SyntheticEvent, KeyboardEvent } from "react";
import { createPortal } from "react-dom";

type Props = DialogProps & React.HTMLAttributes<HTMLElement>;

export default ({ open, close, children, ...rest }: Props) => {
  if (!open) return null;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open && ref.current) ref.current.showModal();
  }, [open]);

  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation();

  return createPortal(
    <dialog ref={ref} className="backdrop:bg-black/60" onClick={close}>
      <div
        role="dialog"
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
