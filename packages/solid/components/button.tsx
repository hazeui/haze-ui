import { ComponentProps, splitProps } from "solid-js";

type BtnProps = {
  txt?: string;
  iconL?: string;
  loading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  class?: string;
  variant?: "primary" | "outline" | "soft" | "ghost";
} & ComponentProps<"button">;

const Btn = (x: BtnProps) => {
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

  const css = `${variants[x.variant ?? "primary"]} ${x.loading || x.disabled ? "muted" : ""} ${x.class ?? ""}`;

  return (
    <button class={css} disabled={x.loading || x.disabled} {...others}>
      {x.iconL && <div class={x.iconL} />}
      {x.loading && <div class="i-eos-icons:loading text-sm" />}
      {x.txt && !x.loading && x.txt}
      {x.loading && x.loaderTxt && x.loaderTxt}
      {x.iconR && <div class={x.iconR} />}
    </button>
  );
};

export default Btn;
