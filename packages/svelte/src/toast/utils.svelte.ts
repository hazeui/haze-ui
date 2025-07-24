// @unocss-include
import { mount } from "svelte";
import Manager from "./manager.svelte";
import type { posType, ToastObj, ToastFnProps } from "types/toast";

type StoreProps = { [key in posType]: ToastObj[] };

export let data: StoreProps = $state({
  topleft: [],
  topmid: [],
  topright: [],
  botleft: [],
  botmid: [],
  botright: [],
});

export const addToast = (obj: ToastObj) => {
  if (obj.pos) data[obj.pos].push({ ...obj, id: crypto.randomUUID() });
};

export const removeToast = (id: string, pos: posType) => {
  const index = data[pos].findIndex((t) => t.id === id);
  if (index !== -1) data[pos].splice(index, 1);

  if (data[pos].length == 0) {
    document.getElementById("toasts-" + pos)?.remove();
  }
};

const positionCss: any = {
  topright: "top-3 right-3",
  topleft: "top-3 left-3",
  botleft: "bottom-3 left-3",
  botright: "bottom-3 right-3",
  topmid: "top-3 left-1/2 -translate-x-1/2",
  botmid: "bottom-3 left-1/2 -translate-x-1/2",
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
    mount(Manager, { target: div, props: { pos: x.pos } });
  }

  addToast(x);
};
