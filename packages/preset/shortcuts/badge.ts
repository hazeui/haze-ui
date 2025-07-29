const base = "rounded font-medium";

const variantsList = ["solid", "secondary", "outline", "surface"];

export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^badge(?:-([\w]+))?(?:-([\w]+))?$/,
      ([, x, y, z = ""]: RegExpMatchArray) => {
        let variant = opts.variant;
        let size = "md";
        let pad, txtsize;

        if (x && variantsList.includes(x)) {
          variant = x;
        } //
        else if (x && sizes[x]) {
          [txtsize, pad] = sizes[x];
        } //
        else if (x && !Number.isNaN(Number(x))) {
        }

        const variants: any = {
          solid: "bg-primary text-white",
          secondary: "bg-secondary text-fg",
          outline: "brd text-fg",
          surface: "bg-secondary brd text-primary",
        };

        // const [txtsize, pad] = sizes[y];
        const p = `py-${pad} px-${pad * 2}`;
        const css = variants[x];
        return `${base} ${css} ${txtsize} ${p}`;
      },
    ],
  ];
};
