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

  const handlekeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = ref?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements?.length === 0) return;

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

  const stopPropagation = (e: Event) => e.stopPropagation();

  return (
    <Portal>
      <dialog ref={ref} class="backdrop:bg-black/60" onclick={props.close}>
        <div
          role="dialog"
          onKeyDown={handlekeydown}
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
