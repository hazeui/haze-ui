export default [
  [
    /^btn(?:-(\w+))?(?:-(eq)?(xs|sm|md|lg|xl))?$/,
    ([, variant = "soft", eqFlag, size = "md"]) => {
      const sizes = {
        xs: ["text-xs", 1],
        sm: ["text-sm", 1.5],
        md: ["text-base", 2],
        lg: ["text-lg", 2.5],
        xl: ["text-xl", 3],
      };

      const [txtsize, pad] = sizes[size];
      const p = eqFlag ? `p${pad}` : `py-${pad} px-${pad * 2}`;
      const base = `rounded inline-flex items-center justify-center
                        gap2 border-0 focus:outline-0
                        disabled:(brightness-90 hover:cursor-not-allowed)`;

      const variants = {
        primary:
          "bg-primary text-white hover:brightness-90",
        soft: "bg-secondary text-fg hover:brightness-90",
        ghost: "bg-transparent text-fg hover:bg-input disabled:text-slate",
        outline: "bg-bg text-fg border-(2 solid slate2) hover:bg-input",
      };

      return `${base} ${variants[variant]} ${txtsize} ${p}`;
    },
  ],
];
