import { definePreset, Preset, transformerVariantGroup } from "unocss";

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
      },
    ],
  };
});
