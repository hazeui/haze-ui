export default [
  {
    muted: "brightness-90 hover:cursor-not-allowed",

    centerfull: "flex items-center justify-center",

    badge:
      "inline-flex items-center justify-center gap1 px-2 py-0.5 text-sm rounded",
    bordered: "border-(1 solid border)",

    skeleton: "p3 w-full h-10 rounded bg-border animate-pulse",
    wrapper: "relative inline-block",
  },

  [/^wh-(.+)$/, ([, size]) => `w-${size} h-${size}`],

  [
    /^badge-(\w+)(?:-(\w+))?$/,
    ([, bg, text]) => `badge bg-${bg} text-${text ?? "white"}`,
  ],
];
