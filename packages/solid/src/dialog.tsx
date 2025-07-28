import { createEffect, type ComponentProps, Show } from "solid-js";
import { Portal, mergeProps } from "solid-js/web";

import { type DialogProps } from "types/dialog";

type Props = DialogProps & ComponentProps<"dialog">;

const Dialog = (props: Props) => {
  props = mergeProps({ closeIcon: true }, props);

  let ref: HTMLDialogElement | undefined;

  createEffect(() => {
    if (props.open) ref?.showModal();
  });

  const stopPropagation = (e: Event) => e.stopPropagation();

  return (
    <Portal>
      <dialog
        ref={ref}
        class="backdrop:bg-black/60"
        onClick={props.close}
        onClose={props.close}
      >
        <div
          role="dialog"
          class={`dialog ${props.class ?? ""}`}
          onClick={stopPropagation}
        >
          {props.closeIcon && (
            <button
              class="i-pajamas:close absolute right-4 top-4 focus-visible:bg-red"
              aria-label="close"
              tabindex="-1"
              tabIndex={-1}
              onClick={close}
            ></button>
          )}
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
