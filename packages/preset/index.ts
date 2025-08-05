import { definePreset, transformerVariantGroup } from "unocss";
import { shortcuts } from "./shortcuts";
import defaultOptions from "./options";
import { deepMergeObj } from "./utils";
import type { OptionTypes } from "./types/options";

export default definePreset((options?: OptionTypes) => {
  const mergedOptions = deepMergeObj(defaultOptions, options || {});

  return {
    name: "haze-ui",

    variants: [
      // You can define custom variants here
    ],

    transformers: [transformerVariantGroup()],

    theme: {
      colors: {
        fg: "#1D293D",
        bg: "#ffffff",
        primary: "#364153",
        secondary: "#e6edf4",
        border: "#cfdce9",
        input: "#e6edf4",
        ring: "#a9b0ff",
        mutedfg: "#557091",
        mutedbg: "#e6edf4",
        danger: "#F87171",
        success: "#34D399",
        warning: "#FBBF24",
      },

      borderRadius: {
        DEFAULT: "0.4rem", // now `rounded` uses your custom radius
      },
    },

    shortcuts: shortcuts(mergedOptions.shortcuts),
  };
});
