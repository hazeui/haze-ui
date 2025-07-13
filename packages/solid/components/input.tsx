import { ComponentProps, JSX } from "solid-js";

type Props = {
  variant?: "outline" | "solid";
  iconL?: string | JSX.Element;
  iconR?: string | JSX.Element;
  disabled?: boolean;
  class?: string;
  parentCss?: string;
  [x: string]: any;
} & ComponentProps<"input">;

const Input = ({
  class: myclass,
  variant = "outline",
  iconL,
  iconR,
  parentCss = "",
  disabled,
  ...x
}: Props) => {
  const variants = { outline: "outline-(1 solid border)", solid: "bg-input" };

  const css = `bg-bg rounded flex items-center gap1 p1
            px3 duration-150 focus-within:ring-(2 primary)
            ${disabled ? "brightness-95" : ""} ${variants[variant]} ${parentCss}`;

  const inputCss = `p2 border-0 outline-0 w-full
                    ${variant == "solid" ? "bg-input" : "bg-bg"} ${myclass}`;

  return (
    <div class={css}>

      {iconL && typeof iconL == "string" ? <div class={iconL} /> : iconL}

      <input {...x} disabled={disabled} class={inputCss} />

      {iconR && typeof iconR == "string" ? <div class={iconR} /> : iconR}
    </div>
  );
};

export default Input;
