interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  knobcss?: string;
  wrappercss?: string;
}

export default ({
  className = "",
  wrappercss = "",
  knobcss = "",
  ...restProps
}: Props) => {
  return (
    <label className={`switch-outline-md ${className}`}>
      <input type="checkbox" className="peer" {...restProps} />
      <span className={`swdot-outline-md ${knobcss}`}></span>
    </label>
  );
};
