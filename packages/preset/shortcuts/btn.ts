const sizes: any = {
  xs: ["text-xs", 1],
  sm: ["text-sm", 1.5],
  md: ["text-base", 2],
  lg: ["text-lg", 2.5],
  xl: ["text-xl", 3],
};

const variants: any = {
  primary: `text-bg hover:brightness-90`,
  soft: "bg-secondary text-fg hover:brightness-90",
  ghost: "bg-transparent text-fg hover:bg-input disabled:text-slate",
  outline:
    "bg-bg text-fg border-(2 solid border) hover:bg-input disabled:bg-mutedbg",
};

export default [
  [
    /^btn(?:-(\w+))?(?:-(eq)?(xs|sm|md|lg|xl))?$/,
    ([, variant = "soft", eqFlag, size = "md"]: RegExpMatchArray) => {
      const [txtsize, pad] = sizes[size];
      const p = eqFlag ? `p${pad}` : `py-${pad} px-${pad * 2}`;
      const base = `rounded inline-flex items-center justify-center
                        gap2 border-0
                        disabled:muted-90`;

      let css = variants[variant] || variants.primary;

      if (variant == "primary") {
        css += ` bg-${variant}`;
      }

      return `${base} ${css} ${txtsize} ${p}`;
    },
  ],
];
