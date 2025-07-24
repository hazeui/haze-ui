import { createEffect, type ComponentProps, Show } from "solid-js";
import { Portal } from "solid-js/web";

import { type DialogProps } from "types/dialog";

type Props = DialogProps & ComponentProps<"dialog">;

const Dialog = (props: Props) => {
  let ref: HTMLDialogElement | undefined;

  createEffect(() => {
    ref?.[!props.open ? "close" : "showModal"]?.();
  });

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape" && props.open) props.onClose();
  };

  const stopPropagation = (e: Event) => e.stopPropagation();

  return (
    <Portal>
      <dialog
        ref={ref}
        class="p0 rounded-xl shadow-lg border-0 backdrop:bg-black/60 animate-(fade-in duration-300)"
        onclick={props.onClose}
        onKeyDown={handleEsc}
      >
        <div
          class={`p-5 bg-white min-w-md ${props.class ?? ""}`}
          onclick={stopPropagation}
        >
          {props.children}
        </div>
      </dialog>
    </Portal>
  );
};

export default (props: Props) => (
  <Show when={props.open}>
    <Dialog {...props} />
  </Show>
);
