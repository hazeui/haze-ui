const encodeSVG = (svg) => {
  return `data:image/svg+xml,${encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22")}`;
};

export const checkIconUrl = () => {
  const checkIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 12l4.243 4.243l8.484-8.486' class='!fill-blue-2' /></svg>`;

  return `bg-[url("${encodeSVG(checkIcon)}")]`;
};

export default [
  [
    /^input(?:-(solid|outline))?(?:-(sm|md|lg|xl))?$/,
    ([, variant = "solid", size = "md"]) => {
      const [textSize, pad] = {
        sm: ["text-sm", 1.5],
        md: ["text-base", 2],
        lg: ["text-lg", 2.5],
        xl: ["text-xl", 3],
      }[size];

      const p = `py-${pad} px-${pad * 1.5}`;

      const base = `transition-all rounded
                         outline-0  focus:(ring-2 ring-primary)`;

      const variants = {
        solid: "bg-input ring-0",
        outline: "bg-bg border-(1 solid border) shadow-sm",
      };

      return `input ${base} ${variants[variant]} ${textSize} ${p}`;
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

  [
    /^checkbox(?:-([\w]+))?(?:-([\d]+))?$/,
    ([, color = "primary", size = 4]) => {
      if (size && Number(color)) {
        size = color;
        color = "primary";
      }

      return `
               appearance-none wh-${size} rounded-sm border-(1.5 solid border)
               bg-no-repeat bg-center bg-[length:100%_100%]
               transition-all checked:(${checkIconUrl()} bg-${color} border-${color})`;
    },
  ],
];
