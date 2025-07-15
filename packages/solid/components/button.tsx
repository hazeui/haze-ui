import { ComponentProps } from "solid-js";

type BtnProps = {
  txt?: string;
  iconL?: string;
  isLoading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  disabled?: boolean;
  class?: string;
  variant?: "primary" | "outline" | "soft" | "ghost";
  iconOnly?: boolean;
  [x: string]: any;
} & ComponentProps<"button">;

const Btn = (x: BtnProps) => {
  const isDisabled = x.isLoading || x.disabled;

  const variants: Record<string, string> = {
    primary: "btn-primary",
    soft: "btn-soft",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const css = `${variants[x.variant ?? "primary"]} ${isDisabled ? "muted" : ""} ${x.class ?? ""}`;

  return (
    <button class={css} disabled={isDisabled} {...x}>
      {x.iconL && <div class={x.iconL} />}
      {x.isLoading && <div class="i-eos-icons:loading text-sm" />}
      {x.txt && !x.isLoading && x.txt}
      {x.isLoading && x.loaderTxt && x.loaderTxt}
      {x.iconR && <div class={x.iconR} />}
    </button>
  );
};

export default Btn;
