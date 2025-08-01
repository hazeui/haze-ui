import { toast } from "@haze-ui/react";

const newToast = (css) => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
    css: css,
  });
};

export default () => {
  return (
    <div class="flex flex-wrap gap-2">
      <button class="btn-primary" onClick={() => newToast("toast-solid")}>
        Solid
      </button>

      <button class="btn" onClick={() => newToast("toast-flat")}>
        Flat
      </button>

      <button class="btn-outline" onClick={() => newToast("toast-outline")}>
        Outline
      </button>
    </div>
  );
};
