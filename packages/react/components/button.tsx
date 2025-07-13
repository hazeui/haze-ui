export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  txt?: string;
  iconL?: string;
  isLoading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "outline" | "alt";
  [x: string]: any;
}

const Btn = ({
  iconL,
  iconR,
  txt,
  isLoading,
  loaderTxt,
  disabled,
  className = "",
  variant = "primary",
  ...x
}: Props) => {
  const isDisabled = isLoading || disabled;

  const variants: any = {
    primary: "btn-primary",
    alt: "btn-alt",
    outline: "btn-outline",
  };

  const css = `${variants[variant]} ${isDisabled ? "muted" : ""} ${className}`;

  return (
    <button className={css} disabled={isDisabled} {...x}>
      {iconL && <div className={iconL} />}
      {isLoading && <div className="i-eos-icons:loading text-sm" />}
      {txt && !isLoading && txt}
      {isLoading && loaderTxt && loaderTxt}
      {iconR && <div className={iconR} />}
    </button>
  );
};

export default Btn;
