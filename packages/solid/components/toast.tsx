import Btn from "./button";
import { render } from "solid-js/web";
import { createSignal, For, createEffect } from "solid-js";

type posType =
  | "topleft"
  | "topmid"
  | "topright"
  | "botleft"
  | "botmid"
  | "botright";

interface ToastProps {
  id: string;
  txt: string;
  title: string;
  type?: "success" | "warning" | "error";
  pos?: posType;
  duration?: number;
}

type StoreProps = { [key in posType]: ToastProps[] };

const defaulPos = "topmid";

const [data, setData] = createSignal<StoreProps>({
  topleft: [],
  topmid: [],
  topright: [],
  botleft: [],
  botmid: [],
  botright: [],
});

const addToast = (obj: ToastProps) => {
  const pos = obj.pos;
  if (!pos) return;
  let tmp = [...data()[pos], { ...obj, id: crypto.randomUUID() }];
  setData({ ...data(), [pos]: tmp });
};

const removeToast = (id: string, pos: posType = defaulPos) => {
  let tmp = data()[pos].filter((t) => t.id !== id);
  setData({ ...data(), [pos]: tmp });

  if (data()[pos].length == 0) {
    document.getElementById("toasts-" + pos)?.remove();
  }
};

const Toast = (x: ToastProps) => {
  createEffect(() => {
    setTimeout(() => removeToast(x.id, x.pos), x.duration);
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

  const closeToast = () => removeToast(x.id, x.pos);

  return (
    <div
      class={`bg-white min-w-md animate-(fade-in-up duration-300)
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

      <Btn
        iconL="i-pajamas:close"
        variant="ghost"
        class="size-sm p1 absolute right-3"
        onClick={closeToast}
      />
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
      <For each={data()[props.pos]}>{(t) => <Toast {...t} />}</For>
    </>
  );
};

export const createToast = (x: any) => {
  x.pos = x.pos || defaulPos;
  const id = "toast-" + x.pos;
  let div = document.getElementById(id);

  if (!div) {
    div = document.createElement("div");
    div.id = id;
    div.className = "absolute " + positionCss[x.pos];
    document.body.appendChild(div);
    render(() => <ToastManager pos={x.pos} />, div);
  }

  addToast(x);
};
