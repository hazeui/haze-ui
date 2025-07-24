import { type ComponentProps, splitProps } from "solid-js";
import { type BtnProps } from "types/button";

type Props = BtnProps & ComponentProps<"button">;

const Btn = (x: Props) => {
  const [_, others] = splitProps(x, [
    "class",
    "variant",
    "txt",
    "loading",
    "loaderTxt",
    "iconL",
    "iconR",
  ]);

  const variants: Record<string, string> = {
    primary: "btn-primary",
    soft: "btn-soft",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const css = `${variants[x.variant ?? "primary"]} ${x.class ?? ""}`;

  return (
    <button class={css} {...others}>
      {x.iconL && <div class={x.iconL} />}
      {x.loading && <div class="i-eos-icons:loading text-sm" />}
      {x.txt && !x.loading && x.txt}
      {x.loading && x.loaderTxt && x.loaderTxt}
      {x.iconR && <div class={x.iconR} />}
    </button>
  );
};

export default Btn;
