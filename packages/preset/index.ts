// @unocss-include
import { definePreset, Preset, transformerVariantGroup } from "unocss";
import { checkIconUrl } from "./utils";

export default definePreset((options): Preset<object> => {
  return {
    name: "haze-ui",
    variants: [
      // ...
    ],

    transformers: [transformerVariantGroup()],

    theme: {
      colors: {
        fg: "#000000",
        bg: "#ffffff",
        primary: "#364153",
        border: "#cfdce9",
        input: "#e6edf4",
        ring: "#a9b0ff",
      },

      borderRadius: {
        DEFAULT: "0.4rem", // now `rounded` uses your custom radius
      },
    },

    shortcuts: [
      {
        muted: "brightness-90 hover:cursor-not-allowed",

        centerfull: "flex items-center justify-center",

        badge:
          "inline-flex items-center justify-center gap1 px-2 py-0.5 text-sm rounded",
        bordered: "border-(1 solid border)",

        skeleton: "p3 w-full h-10 rounded bg-border animate-pulse",
        wrapper: "relative inline-block",
      },

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
        /^btn(?:-(\w+))?(?:-(eq)?(xs|sm|md|lg|xl))?$/,
        ([, variant = "soft", eqFlag, size = "md"]) => {
          const sizes = {
            xs: ["text-xs", 1],
            sm: ["text-sm", 1.5],
            md: ["text-base", 2],
            lg: ["text-lg", 2.5],
            xl: ["text-xl", 3],
          };

          const [txtsize, pad] = sizes[size];
          const p = eqFlag ? `p${pad}` : `py-${pad} px-${pad * 2}`;
          const base = `rounded inline-flex items-center justify-center
                        gap2 transition-all border-0 focus:outline-0
                        disabled:(brightness-90 hover:cursor-not-allowed)`;

          const variants = {
            primary:
              "bg-primary text-white focus:brightness-90 hover:brightness-90",
            soft: "bg-slate-2 text-fg hover:brightness-90 focus:brightness-90",
            ghost:
              "bg-transparent text-fg hover:bg-input disabled:text-slate",
            outline: "bg-bg text-fg border-(2 solid slate2) hover:bg-input",
          };

          return `${base} ${variants[variant]} ${txtsize} ${p}`;
        },
      ],

      [/^wh-(\d+)$/, ([, size]) => `w-${size} h-${size}`],

      [
        /^badge-(\w+)(?:-(\w+))?$/,
        ([, bg, text]) => `badge bg-${bg} text-${text ?? "white"}`,
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

      [
        /^dropdown(?:-(\w+)(?:-(\w+))?)?$/,
        ([, pos, center]) => {
          const tmp = {
            top: "bottom-full mb3",
            bottom: "top-full mt3",
          };

          const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

          pos = tmp[pos] || tmp.bottom;

          return `invisible absolute mt-2 w-48 rounded border bg-white border-(1 solid gray2)
                  opacity-0 shadow-md transition-400 
                  group-focus-within:(opacity-100 visible) grid px1 py2 ${pos} ${mid}`;
        },
      ],

      [
        /^popover(?:-(\w+)(?:-(\w+))?)?$/,
        ([, pos, center]) => {
          const tmp = {
            top: "bottom-full mb3",
            bottom: "top-full mt3",
          };

          const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

          pos = tmp[pos] || tmp.bottom;

          return `absolute mt-2 w-fit rounded border bg-white border-(1 solid gray2)
                  shadow-md grid p2 animate-(fade-in duration-300) ${pos} ${mid}`;
        },
      ],

      [
        /^tooltip(?:-(\w+)(?:-(\w+))?)?$/,
        ([, pos, center]) => {
          const tmp = {
            top: "bottom-full mb3",
            bottom: "top-full mt3",
          };

          const mid = center || pos == "mid" ? "left-1/2 translate-x--1/2" : "";

          pos = tmp[pos] || tmp.bottom;

          return `absolute ${pos} bg-fg p3 rounded text-bg shadow ${mid} 
                  opacity-0 min-w-xs transition-400 group-hover:(opacity-100) pointer-events-none`;
        },
      ],
    ],
  };
});
