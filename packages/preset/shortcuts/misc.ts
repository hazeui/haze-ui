// function mix(color: string, mixWith: string, percent: string) {
//   return `[color-mix(in_srgb,theme(colors.${color}),${mixWith}_${percent}%)]`;
// }
const hsl = (color: string, percent: string) => {
  return `[hsl(from_theme(colors.${color})_h_s_${percent}%)]`;
};

export default () => {
  return [
    {
      centerfull: "flex items-center justify-center",
      skeleton: "p3 w-full h-10 rounded bg-border animate-pulse",
      wrapper: "relative inline-block",
    },

    [
      /^muted(?:-(\d+))?$/,
      ([, brightness = "90"]) =>
        `brightness-${brightness} hover:cursor-not-allowed`,
    ],

    [/^wh-(.+)$/, ([, size]: RegExpMatchArray) => `w-${size} h-${size}`],

    [
      /^brd(?:-(\d+))?(?:-(.+))?$/,
      ([, w = "1", color = "border"]) => {
        return `border-(${w} solid ${color})`;
      },
    ],

    [
      /^dialog(?:-(\w+))?(?:-(.+))?$/,
      ([, opt1, opt2]: RegExpMatchArray) => {
        return ` 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           w-[90%] max-w-md bg-bg text-fg p-5 rounded shadow-lg z-100 
           animate-(fade-in duration-300)
`;
      },
    ],

    [
      /^back-overlay(?:-(\w+))?(?:-(.+))?$/,
      ([, lvl = "50", z = "40"]) => {
        return ` fixed inset-0 bg-black/${lvl} z-${z}`;
      },
    ],

    [
      /^reqstar(?:-(\w+))?(?:-(.+))?$/,
      ([, arg1, arg2]: RegExpMatchArray) => {
        return `after:(content-["*"] pl2 text-red)`;
      },
    ],

    [
      /^data-(\w+):(.+)$/,
      ([, attr, val]: RegExpMatchArray) => `data-[${attr}=true]:${val}`,
    ],

    [
      /^toast(?:-(\w+))?(?:-(.+))?$/,
      ([, variant = "flat", color]: RegExpMatchArray) => {
        const ltxt = hsl(color, "30");
        const lbg = hsl(color, "93");
        const lhover = hsl(color, "85");
        const dbg = hsl(color, "10");
        const dhover = hsl(color, "20");

        const variants: any = {
          solid: "bg-primary text-white dark:bg-mutedbg",
          flat: "bg-bg dark:bg-mutedbg border-(1 solid border)",
          outline: "bg-bg brd",
        };

        const colored: any = {
          solid: `bg-${color} text-bg [&>button:hover]:bg-${lbg}`,
          flat: `bg-${lbg} dark:bg-${dbg} brd-${color} text-${ltxt} 
                 dark:text-${lbg} [&>button:hover]:bg-${lhover} dark:[&>button:hover]:bg-${dhover}`,
          outline: `bg-bg brd-${color} text-${color} [&>button]:text-fg`,
        };

        const css = color ? colored[variant] : variants[variant];
        const base = `relative min-w-sm animate-(fade-in-up duration-300)
                      shadow-lg rounded flex gap3 p4 mb3 [&>button]:text-inherit ${css}`;

        return base;
      },
    ],
  ];
};
