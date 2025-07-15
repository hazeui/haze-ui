import { useRef, useEffect, SyntheticEvent, KeyboardEvent } from "react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default ({ open, onClose, children, className = "" }: Props) => {
  if (!open) return null;

  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    ref?.current?.[!open ? "close" : "showModal"]?.();
  }, [open]);

  const handleEsc = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") onClose();
  };

  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation();

  return createPortal(
    <dialog
      ref={ref}
      className="p0 rounded-xl shadow-lg border-0 backdrop:bg-black/60 animate-(fade-in duration-300)"
      onClick={onClose}
      onKeyDown={handleEsc}
    >
      <div
        className={`p-5 bg-white min-w-md ${className}`}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </dialog>,
    document.body,
  );
};
