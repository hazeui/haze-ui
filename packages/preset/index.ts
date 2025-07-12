import { definePreset, Preset, transformerVariantGroup } from "unocss";

const btnVariants = {};

const btnSizes = {};

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
        input: "#F1F5F9",
        ring: "#a9b0ff",
      },

      borderRadius: {
        DEFAULT: "0.5rem", // now `rounded` uses your custom radius
      },
    },

    rules: [
      [
        /^brightness-(\d+)$/,
        ([, d]) => ({
          filter: `brightness(${+d / 100})`,
        }),
      ],
    ],

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
        "btn-alt": "btn bg-slate2 text-fg hover:brightness-90",
        "btn-outline":
          "btn bg-bg text-fg border-(2 solid border) hover:border-primary",
      },
    ],
  };
});
