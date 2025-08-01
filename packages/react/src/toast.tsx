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
  icon,
  css = "",
  duration = 3000,
  pos = "topmid",
}: ToastObj) => {
  useEffect(() => {
    setTimeout(() => store.remove(id, pos), duration);
  }, []);

  const icons: any = {
    success: "i-mingcute:check-circle-fill",
    warning: "i-jam:info-f",
    danger: "i-mi:circle-error",
  };

  const match = css.match(/\b\S*toast\S*(danger|success|warning)\S*\b/);

  icon =
    icon ||
    (match && match[0] ? icons[match[0].split("-").at(-1)!] : undefined);

  const closeToast = () => store.remove(id, pos);

  return (
    <div className={css.includes("toast") ? css : `toast ${css}`}>
      {icon && <div className={icon + " my-auto text-3xl"} />}

      <div className="grid gap1">
        <b>{title}</b>
        <p>{txt}</p>
      </div>

      <button
        className="btn-ghost-eqsm absolute right-2 top-2 text-inherit"
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
    div.className = "fixed " + positionCss[x.pos];
    document.body.appendChild(div);
    createRoot(div).render(<ToastManager pos={x.pos} />);
  }

  store.add(x);
};
