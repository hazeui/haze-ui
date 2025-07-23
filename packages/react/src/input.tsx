import React, { InputHTMLAttributes } from "react";
import { InputProps } from "types/input";

type Props = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  className,
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
                    ${variant == "solid" ? "bg-input" : "bg-bg"} ${className}`;

  return (
    <div className={css}>
      {iconL && typeof iconL == "string" ? <div className={iconL} /> : iconL}

      <input {...x} disabled={disabled} className={inputCss} />

      {iconR && typeof iconR == "string" ? <div className={iconR} /> : iconR}
    </div>
  );
};

export default Input;
