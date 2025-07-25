// @unocss-include
import { useEffect, useSyncExternalStore } from "react";
import { createRoot } from "react-dom/client";
import type { posType, ToastFnProps, ToastObj } from "types/toast";

type StoreProps = { [key in posType]: ToastObj[] };

let data: StoreProps = {
  topleft: [],
  topmid: [],
  topright: [],
  botleft: [],
  botmid: [],
  botright: [],
};

let listeners: Array<() => void> = [];
const emitChange = () => listeners.forEach((x) => x());

const store = {
  add: (obj: ToastObj) => {
    const pos = obj.pos;
    if (!pos) return;
    let tmp = [...data[pos], { ...obj, id: crypto.randomUUID() }];
    data = { ...data, [pos]: tmp };
    emitChange();
  },

  remove: (id: string | undefined, pos: posType) => {
    if (!id) return;
    let tmp = data[pos].filter((t) => t.id !== id);
    data = { ...data, [pos]: tmp };
    if (data[pos].length == 0) {
      document.getElementById("toasts-" + pos)?.remove();
    }
    emitChange();
  },
  subscribe: (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: () => data,
};

const Toast = ({
  id,
  title,
  txt,
  type,
  duration = 3000,
  pos = "topmid",
}: ToastObj) => {
  useEffect(() => {
    setTimeout(() => store.remove(id, pos), duration);
  }, []);

  const css = {
    success: {
      icon: "i-mingcute:check-circle-fill text-3xl bg-emerald",
      wrapper: "bg-emerald1",
    },
    warning: {
      icon: "i-ci:circle-warning text-3xl bg-amber",
      wrapper: "bg-amber1",
    },
    error: {
      icon: "i-mi:circle-error text-3xl bg-red",
      wrapper: "bg-red1",
    },
  };

  const closeToast = () => store.remove(id, pos);

  return (
    <div
      className={`relative bg-white min-w-md animate-(fade-in-up duration-300)
                  shadow-lg rounded border-(1 solid border) flex gap3 p4 mb3`}
    >
      {type && (
        <div className={`p2 rounded-full my-auto ${css[type].wrapper}`}>
          <div className={css[type].icon} />
        </div>
      )}

      <div className="grid gap2">
        <b>{title}</b>
        <p className="!m0 text-zinc6">{txt}</p>
      </div>

      <button
        className="btn-ghost-eqsm absolute right-2 top-2"
        aria-label="close"
        onClick={closeToast}
      >
        <span className="i-pajamas:close" />
      </button>
    </div>
  );
};

const positionCss: any = {
  topright: "top-3 right-3",
  topleft: "top-3 left-3",
  botleft: "bottom-3 left-3",
  botright: "bottom-3 right-3",
  topmid: "top-3 left-1/2 -translate-x-1/2",
  botmid: "bottom-3 left-1/2 -translate-x-1/2",
};

const ToastManager = ({ pos }: { pos: posType }) => {
  const list = useSyncExternalStore(store.subscribe, store.getSnapshot)[pos];
  return list.map((t) => <Toast {...t} key={t.id} />);
};

export const toast = (x: ToastFnProps) => {
  x.pos = x.pos || "topmid";
  const id = "toast-" + x.pos;
  let div = document.getElementById(id);

  if (!div) {
    div = document.createElement("div");
    div.id = id;
    div.className = "absolute " + positionCss[x.pos];
    document.body.appendChild(div);
    createRoot(div).render(<ToastManager pos={x.pos} />);
  }

  store.add(x);
};
