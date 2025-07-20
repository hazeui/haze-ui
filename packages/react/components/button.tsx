export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  txt?: string;
  iconL?: string;
  isLoading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  className?: string;
  variant?: "primary" | "outline" | "soft" | "ghost";
  [x: string]: any;
}

const Btn = ({
  iconL,
  iconR,
  txt,
  isLoading,
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
      {isLoading && <div className="i-eos-icons:loading text-sm" />}
      {txt && !isLoading && txt}
      {isLoading && loaderTxt && loaderTxt}
      {iconR && <div className={iconR} />}
    </button>
  );
};

export default Btn;
