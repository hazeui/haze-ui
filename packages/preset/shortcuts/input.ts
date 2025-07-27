const inputConfig: any = {
  sm: ["text-sm", 1.5],
  md: ["text-base", 2],
  lg: ["text-lg", 2.5],
  xl: ["text-xl", 3],
};

const inputVariants: any = {
  solid: "bg-input ring-0",
  outline: "bg-bg border-(1 solid border) shadow-sm",
};

export default [
  [
    /^input(?:-(solid|outline))?(?:-(sm|md|lg|xl))?$/,
    ([, variant = "solid", size = "md"]) => {
      const [textSize, pad] = inputConfig[size];

      const p = `py-${pad} px-${pad * 1.5}`;

      const base = `transition-all rounded
                         outline-0  focus:(ring-2 ring-primary)`;

      return `${base} ${inputVariants[variant]} ${textSize} ${p}`;
    },
  ],

  [
    /^radio(?:-(\d+))?$/,
    ([, size = 4]) => {
      const bordersize = Math.floor(size * 1.5);
      return `appearance-none wh-${size} rounded-full border-(1 solid slate)
                  checked:(border-${bordersize} border-primary) transition-border`;
    },
  ],
];
