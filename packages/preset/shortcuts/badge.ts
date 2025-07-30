function mix(color: string, mixWith: string, percent: string) {
  return `color-mix(in_srgb,theme(colors.${color}),${mixWith}_${percent}%)`;
}

export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^badge(?:-([\w]+))?(?:-([\w]+))?$/,
      ([, arg1, arg2 = ""]: RegExpMatchArray): string => {
        let variant = "solid";
        let size = "md";

        const variants: Record<string, string> = {
          solid: "bg-primary text-white",
          secondary: "bg-secondary text-fg",
          outline: "brd text-fg",
          surface: "bg-secondary brd text-fg",
        };

        // variants
        if (arg1 && variants[arg1]) {
          variant = arg1;
        } else if (arg1 && sizes[arg1]) {
          size = arg1;
        }

        if (arg2 && sizes[arg2]) {
          size = arg2;
        } else if (arg2 && variants[arg2]) {
          variant = arg2;
        }

        const [txtSize, pad] = sizes[size] || sizes["md"];
        const css = variants[variant] || variants["solid"];
        const p = `py-${pad} px-${pad * 2}`;

        return `inline-flex items-center gap1 rounded ${css} ${txtSize} ${p}`;
      },
    ],

    [
      /^(dtxtbg[r]?)-([\w]+(?:_[\w]+)?)(?:-(\d{1,3}))?$/,
      ([, type, rawColor, percent = "50"]: RegExpMatchArray) => {
        const color = rawColor.replace("_", ".");
        const main = mix(color, "black", percent);
        const border = type === "dtxtbgr" ? `brd-[${main}]` : "";
        return `bg-[theme(colors.${color})] text-[${main}] ${border}`;
      },
    ],

    [
      /^(ltxtbg[r]?)-([\w]+(?:_[\w]+)?)(?:-(\d{1,3}))?$/,
      ([, type, rawColor, percent = "70"]: RegExpMatchArray) => {
        const color = rawColor.replace("_", ".");
        const main = mix(color, "white", percent);
        const border = type === "ltxtbgr" ? `brd-[${main}]` : "";
        return `bg-[theme(colors.${color})] text-[${main}] ${border}`;
      },
    ],
  ];
};
