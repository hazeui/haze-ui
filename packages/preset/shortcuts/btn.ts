const variants: any = {
  primary: `text-bg hover:brightness-90`,
  soft: "bg-secondary text-fg hover:brightness-90",
  ghost: "bg-transparent text-fg hover:bg-input disabled:text-slate",
  outline:
    "bg-bg text-fg border-(2 solid border) hover:bg-input disabled:bg-mutedbg",
};

export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^btn(?:-(\w+))?(?:-(eq)?(xs|sm|md|lg|xl))?$/,
      ([, variant = opts.variant, eqFlag, size = "md"]: RegExpMatchArray) => {
        const [txtsize, pad] = sizes[size];
        const p = eqFlag ? `p${pad}` : `py-${pad} px-${pad * 2}`;
        const base = `rounded inline-flex items-center justify-center
                        gap2 border-0
                        disabled:muted-90`;

        let css = variants[variant] || variants.primary;

        if (variant == "primary" || !variants[variant]) {
          css += ` bg-${variant}`;
        }

        return `${base} ${css} ${txtsize} ${p}`;
      },
    ],
  ];
};
