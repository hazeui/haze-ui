import { ComponentProps } from "solid-js";

type BtnProps = {
  txt?: string;
  iconL?: string;
  isLoading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  disabled?: boolean;
  class?: string;
  variant?: "primary" | "outline" | "alt";
  [x: string]: any;
} & ComponentProps<"button">;

const Btn = ({
  iconL,
  iconR,
  txt,
  isLoading,
  disabled,
  class: myclass = "",
  loaderTxt,
  variant = "primary",
  ...x
}: BtnProps) => {
  const isDisabled = isLoading || disabled;

  const variants: any = {
    primary: "btn-primary",
    alt: "btn-alt",
    outline: "btn-outline",
  };

  const css = `${variants[variant]} ${isDisabled ? "muted" : ""} ${myclass}`;

  return (
    <button class={css} disabled={isDisabled} {...x}>
      {iconL && <div class={iconL} />}
      {isLoading && <div class="i-eos-icons:loading text-sm" />}
      {txt && !isLoading && txt}
      {isLoading && loaderTxt && loaderTxt}
      {iconR && <div class={iconR} />}
    </button>
  );
};

export default Btn;
