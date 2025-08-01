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
    <div>
      <button
        class="btn-outline text-indigo"
        onClick={() => newToast("toast-flat-indigo")}
      >
        Indigo
      </button>

      <button
        class="btn-outline text-sky"
        onClick={() => newToast("toast-flat-sky")}
      >
        Sky
      </button>

      <button
        class="btn-outline text-danger"
        onClick={() => newToast("toast-flat-danger")}
      >
        Danger
      </button>

      <button
        class="btn-outline text-success"
        onClick={() => newToast("toast-flat-success")}
      >
        Success
      </button>

      <button
        class="btn-outline text-warning"
        onClick={() => newToast("toast-flat-warning")}
      >
        Warning
      </button>

      <hr class="brd w-full my2" />

      <button
        class="btn-outline text-indigo"
        onClick={() => newToast("toast-outline-indigo")}
      >
        Indigo
      </button>

      <button
        class="btn-outline text-sky"
        onClick={() => newToast("toast-outline-sky")}
      >
        Sky
      </button>

      <button
        class="btn-outline text-danger"
        onClick={() => newToast("toast-outline-danger")}
      >
        Danger
      </button>

      <button
        class="btn-outline text-success"
        onClick={() => newToast("toast-outline-success")}
      >
        Success
      </button>

      <button
        class="btn-outline text-warning"
        onClick={() => newToast("toast-outline-warning")}
      >
        Warning
      </button>
    </div>
  );
};
