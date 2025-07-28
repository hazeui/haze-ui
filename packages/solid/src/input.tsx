import { type ComponentProps, splitProps } from "solid-js";
import { type InputProps } from "types/input";

type Props = InputProps & ComponentProps<"input">;

const Input = (x: Props) => {
  const [_, restProps] = splitProps(x, ["class", "iconL", "iconR"]);

  return (
    <div class={x.class?.includes("grinput") ? x.class : `grinput ${x.class}`}>
      {typeof x.iconL === "string" ? <div class={x.iconL} /> : x.iconL}
      <input {...restProps} />
      {typeof x.iconR === "string" ? <div class={x.iconR} /> : x.iconR}
    </div>
  );
};

export default Input;
