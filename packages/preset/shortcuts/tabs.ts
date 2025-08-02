// Tablist wrapper styles
const variants: any = {
  box: `rounded bg-input  p-2`,
  line: `border-(0 b solid border) `,
  outline: `border-(0 b-2 solid border)  pb-0`,
  classic: `rounded bg-input  p-2 pb-0`,
  subtle: ``,
};

export default () => {
  return [
    [
      /^tabs(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
      ([, variant = "box", bg, fg = "fg"]: RegExpMatchArray) => {
        if (variant == "box" && !bg) bg = "bg";
        if (variant == "outline" && !bg) bg = "border";
        if (variant == "subtle" && !bg) bg = "input";

        const base = `rounded inline-flex items-center justify-center gap2 border-0 py3 px4 bg-transparent`;
        const unsel = `[&>button]:(${base})`;
        const aria = `[&>button[aria-selected=true]]:(`;

        const tab: any = {
          box: `${unsel} ${aria}bg-${bg} text-${fg})`,
          line: `${unsel} [&>button]:(rounded-b-0 -mb-2px text-mutedfg) ${aria}text-${fg} border-(b-2 solid ${bg}))`,
          outline: `${unsel} [&>button]:(rounded-b-0 -mb-2px) ${aria}text-${fg} bg-bg border-(2 solid ${bg} b-transparent))`,
          classic: `${unsel} [&>button]:(rounded-b-0 -mb-2px text-mutedfg)  rounded-b-0 ${aria}text-fg bg-bg)`,
          subtle: `${unsel} text-mutedfg ${aria}bg-${bg} text-${fg})`,
        };

        const css = `flex items-center ${variants[variant]} ${tab[variant]}`;
        return css;
      },
    ],

    [
      /^tabon-(.+)$/,
      ([, css]: RegExpMatchArray) => `[&>button[aria-selected=true]]:${css}`,
    ],
    [/^tab-(.+)$/, ([, css]: RegExpMatchArray) => `[&>button]:${css}`],
  ];
};
