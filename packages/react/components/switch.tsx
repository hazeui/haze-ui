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
    <label
      className={`inline-flex items-center cursor-pointer relative w-10 h-6 ${className}`}
    >
      <input type="checkbox" className="peer sr-only" {...restProps} />
      <div
        className={`w-full h-full bg-border rounded-full peer-checked:(bg-primary) ${wrappercss}`}
      ></div>
      <div
        className={`absolute left-1 wh-4 bg-white rounded-full shadow transition-all peer-checked:(translate-x-4) ${knobcss}`}
      ></div>
    </label>
  );
};
