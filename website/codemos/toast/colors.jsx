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
        className="btn-outline text-indigo"
        onClick={() => newToast("toast-flat-indigo")}
      >
        Indigo
      </button>

      <button
        className="btn-outline text-sky"
        onClick={() => newToast("toast-flat-sky")}
      >
        Sky
      </button>

      <button
        className="btn-outline text-danger"
        onClick={() => newToast("toast-flat-danger")}
      >
        Danger
      </button>

      <button
        className="btn-outline text-success"
        onClick={() => newToast("toast-flat-success")}
      >
        Success
      </button>

      <button
        className="btn-outline text-warning"
        onClick={() => newToast("toast-flat-warning")}
      >
        Warning
      </button>

      <hr className="brd w-full my2" />

      <button
        className="btn-outline text-indigo"
        onClick={() => newToast("toast-outline-indigo")}
      >
        Indigo
      </button>

      <button
        className="btn-outline text-sky"
        onClick={() => newToast("toast-outline-sky")}
      >
        Sky
      </button>

      <button
        className="btn-outline text-danger"
        onClick={() => newToast("toast-outline-danger")}
      >
        Danger
      </button>

      <button
        className="btn-outline text-success"
        onClick={() => newToast("toast-outline-success")}
      >
        Success
      </button>

      <button
        className="btn-outline text-warning"
        onClick={() => newToast("toast-outline-warning")}
      >
        Warning
      </button>
    </div>
  );
};
