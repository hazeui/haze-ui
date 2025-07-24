import { type ComponentProps, splitProps } from "solid-js";
import { type InputProps } from "types/input";

type Props = InputProps & ComponentProps<"input">;

const Input = (x: Props) => {
  const [_, restProps] = splitProps(x, [
    "class",
    "variant",
    "iconL",
    "iconR",
    "parentCss",
  ]);

  const variants = {
    outline: "outline-(1 solid border)",
    solid: "bg-input",
  };

  const css = `bg-bg rounded flex items-center gap1 p1
    px3 duration-150 focus-within:ring-(2 primary)
    ${x.disabled ? "brightness-95" : ""} ${variants[x.variant ?? "outline"]} ${x.parentCss ?? ""}`;

  const inputCss = `p2 border-0 outline-0 w-full
    ${x.variant === "solid" ? "bg-input" : "bg-bg"} ${x.class ?? ""}`;

  return (
    <div class={css}>
      {x.iconL && typeof x.iconL === "string" ? (
        <div class={x.iconL} />
      ) : (
        x.iconL
      )}

      <input {...restProps} class={inputCss} disabled={x.disabled} />

      {x.iconR && typeof x.iconR === "string" ? (
        <div class={x.iconR} />
      ) : (
        x.iconR
      )}
    </div>
  );
};

export default Input;
