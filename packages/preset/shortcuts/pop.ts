const tmp = {
  top: "bottom-full mb3",
  bottom: "top-full mt3",
};

export default [
  [
    /^dropdown(?:-(\w+)(?:-(\w+))?)?$/,
    ([, pos, center]) => {
      const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

      pos = tmp[pos] || tmp.bottom;

      return `invisible absolute mt-2 w-48 rounded border bg-mutebg border-(1 solid gray2)
                  opacity-0 shadow-md transition-400 
                  group-focus-within:(opacity-100 visible) grid px1 py2 ${pos} ${mid}`;
    },
  ],

  [
    /^popover(?:-(\w+)(?:-(\w+))?)?$/,
    ([, pos, center]) => {
      const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

      pos = tmp[pos] || tmp.bottom;

      return `absolute mt-2 min-w-full rounded border bg-bg brd
                  shadow-md grid p2 animate-(fade-in duration-300) ${pos} ${mid}`;
    },
  ],

  [
    /^tooltip(?:-(\w+)(?:-(\w+))?)?$/,
    ([, pos, center]) => {
      const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

      pos = tmp[pos] || tmp.bottom;

      return `absolute ${pos} bg-fg p3 rounded text-bg shadow ${mid} 
                  opacity-0 min-w-xs transition-400 group-hover:(opacity-100) pointer-events-none`;
    },
  ],
];
