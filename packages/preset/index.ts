// @unocss-include
import { definePreset, transformerVariantGroup } from "unocss";
import { shortcuts } from "./shortcuts";

export default definePreset(() => {
  return {
    name: "haze-ui",
    variants: [
      // ...
    ],

    transformers: [transformerVariantGroup()],

    theme: {
      colors: {
        fg: "#1D293D",
        bg: "#ffffff",
        primary: "#364153",
        border: "#cfdce9",
        input: "#e6edf4",
        ring: "#a9b0ff",
        inactivefg: "#557091",
      },

      borderRadius: {
        DEFAULT: "0.4rem", // now `rounded` uses your custom radius
      },
    },

    // @ts-ignore
    shortcuts: shortcuts,
  };
});
