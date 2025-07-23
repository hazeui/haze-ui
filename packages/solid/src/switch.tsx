import { ComponentProps, splitProps } from "solid-js";
import { SwitchProps } from "types/switch";

type Props = SwitchProps & ComponentProps<"input">;

export default (x: Props) => {
  const [local, others] = splitProps(x, ["knobcss", "class"]);

  return (
    <label class={local.class || "switch"}>
      <input type="checkbox" class="peer" {...others} />
      <span class={local.knobcss || "swdot"}></span>
    </label>
  );
};
