import React from "react";
import type { InputHTMLAttributes } from "react";
import type { InputProps } from "types/input";

type Props = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ className = "", iconL, iconR, ...rest }) => {
  return (
    <div
      className={
        className.includes("grinput") ? className : `grinput ${className}`
      }
    >
      {typeof iconL === "string" ? <div className={iconL} /> : iconL}
      <input {...rest} />
      {typeof iconR === "string" ? <div className={iconR} /> : iconR}
    </div>
  );
};

export default Input;
