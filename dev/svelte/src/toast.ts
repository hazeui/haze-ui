// @unocss-include
import { mount } from "svelte";
import Btn from "haze-ui/button.svelte";

export const createToast = () => {
  let div = document.getElementById("toasts");
  if (!div) {
    div = document.createElement("div");
    div.id = "toasts";
    div.className = "absolute bg-red grid gap3 top-3 right-3";
    document.body.appendChild(div);
  }

  mount(Btn, {
    target: div,
    props: { variant: "soft", txt: "hiiiiii" },
  });
};
