import Btn from "./button";
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
  x.duration = x.duration || 3000;

  createEffect(() => {
    setTimeout(() => {
      if (x.id) removeToast(x.id, x.pos);
    }, x.duration);
  });

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

  const closeToast = () => {
    if (x.id) (removeToast(x.id, x.pos), x.duration);
  };

  return (
    <div
      class={`relative bg-white min-w-md animate-(fade-in-up duration-300)
                  shadow-lg rounded border-(1 solid border) flex gap3 p4 mb3`}
    >
      {x.type && (
        <div class={`p2 rounded-full my-auto ${css[x.type].wrapper}`}>
          <div class={css[x.type].icon} />
        </div>
      )}

      <div class="grid gap2">
        <b>{x.title}</b>
        <p class="!m0 text-zinc6">{x.txt}</p>
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
