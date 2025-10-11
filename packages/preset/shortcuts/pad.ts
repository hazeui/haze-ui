const sizes: any = {
  xs: ["text-xs", 1],
  sm: ["text-sm", 1.5],
  md: ["text-sm", 1.75],
  lg: ["text-base", 2.25],
  xl: ["text-lg", 2.75],
};

export default [
  [
    /^pad(?:-(xs|sm|md|lg|xl))?$/,
    ([, size = "md"]) => {
      const [textSize, pad] = sizes[size] ?? sizes.md;
      const py = pad;
      const px = +(pad * 1.5).toFixed(2);
      return `${textSize} py-${py} px-${px}`;
    },
  ],
];
