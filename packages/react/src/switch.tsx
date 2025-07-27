import { type SwitchProps } from "types/switch";

type Props = SwitchProps & React.InputHTMLAttributes<HTMLInputElement>;

export default ({ className, knobcss, ...restProps }: Props) => {
  return (
    <label className={className || "switch"}>
      <input type="checkbox" className="peer" {...restProps} />
      <span className={knobcss || "swdot"}></span>
    </label>
  );
};
