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
    <div className="flex flex-wrap gap-2">
      <button className="btn-primary" onClick={() => newToast("toast-solid")}>
        Solid
      </button>

      <button className="btn" onClick={() => newToast("toast-flat")}>
        Flat
      </button>

      <button className="btn-outline" onClick={() => newToast("toast-outline")}>
        Outline
      </button>
    </div>
  );
};
