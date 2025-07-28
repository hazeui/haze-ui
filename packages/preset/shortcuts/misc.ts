export default [
  {
    centerfull: "flex items-center justify-center",

    badge:
      "inline-flex items-center justify-center gap1 px-2 py-0.5 text-sm rounded",

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
    /^badge-(\w+)(?:-(\w+))?$/,
    ([, bg, text]: RegExpMatchArray) =>
      `badge bg-${bg} text-${text ?? "white"}`,
  ],

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
];
