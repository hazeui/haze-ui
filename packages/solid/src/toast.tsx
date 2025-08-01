import { render } from "solid-js/web";
import { createSignal, For, createEffect } from "solid-js";
import type { posType, ToastFnProps, ToastObj } from "types/toast";

type StoreProps = { [key in posType]: ToastObj[] };

const [data, setData] = createSignal<StoreProps>({
  topleft: [],
  topmid: [],
  topright: [],
  botleft: [],
  botmid: [],
  botright: [],
});

const addToast = (obj: ToastObj) => {
  const pos = obj.pos;
  if (!pos) return;
  let tmp = [...data()[pos], { ...obj, id: crypto.randomUUID() }];
  setData({ ...data(), [pos]: tmp });
};

const removeToast = (id: string, pos: posType = "topmid") => {
  let tmp = data()[pos].filter((t) => t.id !== id);
  setData({ ...data(), [pos]: tmp });

  if (data()[pos].length == 0) {
    document.getElementById("toasts-" + pos)?.remove();
  }
};

const ToastCard = (x: ToastObj) => {
  x.css = x.css || "";

  const icons: any = {
    success: "i-mingcute:check-circle-fill",
    warning: "i-jam:info-f",
    danger: "i-mi:circle-error",
  };

  x.duration = x.duration || 3000;

  const match = x.css.match(/\b\S*toast\S*(danger|success|warning)\S*\b/);

  x.icon =
    x.icon ||
    (match && match[0] ? icons[match[0].split("-").at(-1)!] : undefined);

  createEffect(() => {
    setTimeout(() => {
      if (x.id) removeToast(x.id, x.pos);
    }, x.duration);
  });

  const closeToast = () => {
    if (x.id) (removeToast(x.id, x.pos), x.duration);
  };

  return (
    <div class={x.css.includes("toast") ? x.css : `toast ${x.css}`}>
      {x.icon && <div class={x.icon + " my-auto text-3xl"} />}

      <div class="grid gap1">
        <b>{x.title}</b>
        <p>{x.txt}</p>
      </div>

      <button
        class="btn-ghost-eqsm absolute right-2 top-2"
        aria-label="close"
        onClick={closeToast}
      >
        <span class="i-pajamas:close" />
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

const ToastManager = (props: { pos: posType }) => {
  return (
    <>
      <For each={data()[props.pos]}>{(t) => <ToastCard {...t} />}</For>
    </>
  );
};

export const toast = ({ pos = "topmid", ...x }: ToastFnProps) => {
  const id = "toast-" + pos;
  let div = document.getElementById(id);

  if (!div) {
    div = document.createElement("div");
    div.id = id;
    div.className = "absolute " + positionCss[pos];
    document.body.appendChild(div);
    render(() => <ToastManager pos={pos} />, div);
  }

  addToast({ ...x, pos });
};
