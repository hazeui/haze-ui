import { type BtnProps } from "types/button";

type Props = BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Btn = ({
  iconL,
  iconR,
  txt,
  loading,
  loaderTxt,
  className = "",
  variant = "primary",
  ...x
}: Props) => {
  const variants: any = {
    primary: "btn-primary",
    soft: "btn-soft",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const css = `${variants[variant]} ${className}`;

  return (
    <button className={css} {...x}>
      {iconL && <div className={iconL} />}
      {loading && <div className="i-eos-icons:loading text-sm" />}
      {txt && !loading && txt}
      {loading && loaderTxt && loaderTxt}
      {iconR && <div className={iconR} />}
    </button>
  );
};

export default Btn;
