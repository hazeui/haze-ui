// @unocss-include
import { definePreset, Preset, transformerVariantGroup } from "unocss";

import { shortcuts } from "./utils";

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
        primary: "#7C86FF",
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
        btn: `rounded inline-flex items-center justify-center border-0
              gap2 transition-colors duration-200 size-md`,

        muted: "brightness-90 hover:cursor-not-allowed",

        "size-sm": "text-sm px3 py1.5",
        "size-md": "text-base px4 py2", // default
        "size-lg": "text-lg px5 py2.5",
        "size-xl": "text-xl px6 py3",

        "btn-primary": "btn bg-primary text-white hover:brightness-90",
        "btn-soft": "btn bg-slate-2 text-fg hover:brightness-90",
        "btn-ghost": "btn bg-transparent text-fg hover:bg-input",
        "btn-outline":
          "btn bg-bg text-fg border-(2 solid border) hover:border-primary",

        input:
          "duration-150 p3 rounded border-0 outline-0 ring-(1 border) focus:(ring-2 ring-primary)",

        "input-solid": "input bg-input ring-0",
        centerfull: "flex items-center justify-center",

        badge:
          "inline-flex items-center justify-center gap1 px-2 py-0.5 text-sm rounded",
        bordered: "border-(1 solid border)",

        ...shortcuts,
      },

      [/^wh-(\d+)$/, ([, size]) => `w-${size} h-${size}`],

      [
        /^badge-(\w+)(?:-(\w+))?$/,
        ([, bg, text]) => `badge bg-${bg} text-${text ?? "white"}`,
      ],

      [
        // /^radio(?:-(\d+))?(?:-(\w+))?$/,
    /^radio(?:-(\d+))?$/,
        ([, size = 4]) => {
          const bordersize = Math.floor(size * 1.5);
          return `appearance-none wh-${size} rounded-full border-(1 solid slate)
                  checked:(border-${bordersize} border-primary) transition-border`;
        },
      ],
    ],
  };
});
