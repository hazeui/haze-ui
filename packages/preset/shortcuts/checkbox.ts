export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^checkbox(?:-([\w]+))?(?:-([\w]+))?$/,
      ([, color = opts.variant, size = "md"]) => {
        if (size && sizes[color]) {
          size = color;
          color = "primary";
        }

        size = sizes[size];

        const rounded = Number(size) < 7 ? "rounded-sm" : "rounded-md";

        return ` disabled:muted-70
               appearance-none wh-${size} ${rounded}  border-(1.5 solid border)
               transition inline-flex justify-center items-center text-bg 
               checked:(bg-${color} border-${color}) align-middle 
               checked:after:(i-uil:check size-${size}) after:(content-empty)`;
      },
    ],
  ];
};
