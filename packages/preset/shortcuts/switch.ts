const round1 = (num: number) => Math.round(num * 10) / 10;

export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^switch(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
      ([, variant = opts.variant, size = "md", color = opts.color]) => {
        const sizeValue = sizes[size];
        const w = sizeValue * 2;
        const h = variant === "knob" ? 3 : sizeValue;

        const dotRatio = variant === "knob" ? 0.7 : 0.7;
        const dotSize = round1(sizeValue * dotRatio);
        const pad = round1((sizeValue - dotSize) / 2);

        const variants: any = {
          flat: {
            bg: `bg-border checked:bg-${color}`,
            dot: "bg-bg shadow",
          },
          line: {
            bg: `bg-bg outline-(2 solid border) checked:outline-${color}`,
            dot: `bg-border checked:bg-${color}`,
          },
          knob: {
            bg: `bg-border ring-(2 border)`,
            dot: `bg-bg ring-(6 fg) checked:ring-${color}`,
          },
        };

        return `appearance-none relative inline-block cursor-pointer rounded-full
            w-${w} h-${h} ${variants[variant].bg} checked:after:translate-x-${sizeValue}
            after:(content-[''] absolute top-1/2 -translate-y-1/2 left-${pad}
                   w-${dotSize} h-${dotSize} rounded-full transition-transform
                   ${variants[variant].dot})`;
      },
    ],
  ];
};
