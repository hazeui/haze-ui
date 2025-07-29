import btn from "./btn";
import input from "./input";
import pop from "./pop";
import switch_ from "./switch";
import tabs from "./tabs";
import misc from "./misc";
import checkbox from "./checkbox";
import radio from "./radio";
import badge from "./badge";

export const shortcuts = (opts:any) => {
  return [
    btn(opts.btn),
    input(opts.input),
    pop(opts.popover),
    switch_(opts.switch),
    tabs(),
    misc(),
    checkbox(opts.checkbox),
    radio(opts.radio),
    badge(opts.badge),
  ].flat();
};
