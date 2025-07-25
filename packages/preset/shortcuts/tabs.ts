export default [
  [
    // /^tabs(?:-(\w+)(?:-(\w+))?)?$/,
    /^tabs(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
    ([, variant = "box", bg, fg = "fg"]) => {
      if (variant == "box" && !bg) bg = "bg";
      if (variant == "outline" && !bg) bg = "border";
      if (variant == "subtle" && !bg) bg = "input";

      // Tablist wrapper styles
      const variants = {
        box: `rounded bg-input flex p-2`,
        line: `border-(0 b solid border) flex`,
        outline: `border-(0 b-2 solid border) flex pb-0`,
        classic: `rounded bg-input flex p-2 pb-0`,
        subtle: `flex`,
      };

      const base = `rounded inline-flex items-center justify-center gap2 border-0 py3 px4 bg-transparent`;
      const unsel = `[&>button]:(${base})`;
      const aria = `[&>button[aria-selected=true]]:(`;

      // Individual tab button styles
      const tab = {
        box: `${unsel} ${aria}bg-${bg} text-${fg})`,
        line: `${unsel} [&>button]:(rounded-b-0 -mb-2px text-inactivefg) ${aria}text-${fg} border-(b-2 solid ${bg}))`,
        outline: `${unsel} [&>button]:(rounded-b-0 -mb-2px) ${aria}text-${fg} bg-bg border-(2 solid ${bg} b-transparent))`,
        classic: `${unsel} [&>button]:(rounded-b-0 -mb-2px text-inactivefg)  rounded-b-0 ${aria}text-fg bg-bg)`,
        subtle: `${unsel} text-inactivefg ${aria}bg-${bg} text-${fg})`,
      };

      const css = `${variants[variant]} ${tab[variant]}`;
      return css;
    },
  ],

  [/^tabon-(.+)$/, ([, css]) => `[&>button[aria-selected=true]]:${css}`],
  [/^tab-(.+)$/, ([, css]) => `[&>button]:${css}`],
];
