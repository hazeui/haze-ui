import { useRef, useEffect } from "react";
import { type DialogProps } from "types/dialog";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";

type Props = DialogProps & React.HTMLAttributes<HTMLElement>;

export default ({ open, close, className, ...rest }: Props) => {
  if (!open) return null;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open && ref.current) ref.current.showModal();
  }, [open]);

  const onClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.currentTarget == e.target) close();
  };

  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-black/60"
      onClick={onClick}
      onClose={close}
    >
      <div className={`dialog ${className || ""}`}>
        {rest.closeIcon && (
          <button
            className="i-pajamas:close absolute right-4 top-4 focus-visible:bg-red"
            aria-label="close"
            onClick={close}
            tabIndex={-1}
          ></button>
        )}
        {rest.children}
      </div>
    </dialog>,
    document.body,
  );
};
