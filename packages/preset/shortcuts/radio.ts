const opts = {
  color: "primary",
  sizes: { sm: 3, md: 4, lg: 6, xl: 8 },
};

const sizes: any = opts.sizes;

export default [
  [
    /^radiob(?:-([\w]+))?(?:-([\w]+))?$/,
    ([, color = opts.color, size = "md"]) => {
      if (size && sizes[color]) {
        size = color;
        color = opts.color;
      }

      size = sizes[size];
      const bordersize = Math.floor(Number(size) * 1.5);

      return `appearance-none wh-${size} rounded-full border-(1 solid border)
              transition-border align-middle disabled:muted-70
              checked:(border-${bordersize} border-${color})`;
    },
  ],

  [
    /^radio(?:-([\w]+))?(?:-([\w]+))?$/,
    ([, color = opts.color, size = "md"]) => {
      if (size && sizes[color]) {
        size = color;
        color = opts.color;
      }

      const sizeValue = sizes[size];
      const innerSize = Math.round(Number(sizeValue) * 0.5); // 50% of outer size

      return ` disabled:muted-70
             appearance-none wh-${sizeValue} rounded-full border-(1.5 solid border)
             transition inline-flex justify-center items-center text-bg 
             checked:(border-${color})  
             checked:after:(bg-${color} wh-${innerSize} rounded-full) 
             after:(content-empty)`;
    },
  ],
];
