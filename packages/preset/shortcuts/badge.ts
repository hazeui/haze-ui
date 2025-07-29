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
      /^dtxtbg-([\w.]+)-(\d{1,3})(-brd)?$/,
      ([, color, percent = "20", brd]: RegExpMatchArray) => {
        const main = mix(color, "black", percent);

        return `bg-[${mix(color, "white", "50")}]
                text-[${main}] ${brd ? `brd-[${main}]` : ""} `;
      },
    ],

    [
      /^ltxtbg-([\w.]+)-(\d{1,3})(-brd)?$/,
      ([, color, percent = "10", brd]: RegExpMatchArray) => {
        const main = mix(color, "black", percent);

        return `bg-[${main}]
            text-[${mix(color, "white", "70")}] 
            ${brd ? `brd-[${mix(color, "black", "40")}]` : ""}`;
      },
    ],
  ];
};
