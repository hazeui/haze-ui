import { definePreset, transformerVariantGroup } from "unocss";
import { shortcuts } from "./shortcuts";
import defaultOptions from "./options";
import { deepMergeObj } from "./utils";
import type { OptionTypes } from "./types/options";

export default definePreset((options?: OptionTypes) => {
  const mergedOptions = deepMergeObj(defaultOptions, options || {});

  return {
    name: "@haze-ui/preset",

    variants: [
      // You can define custom variants here
    ],

    transformers: [transformerVariantGroup()],

    theme: {
      colors: {
        fg: "#1D293D",
        bg: "#ffffff",

        primary: { DEFAULT: "#364153", fg: "#ffffff" },
        secondary: { DEFAULT: "#e6edf4", fg: "#1D293D" },

        border: "#cfdce9",
        input: "#e6edf4",
        ring: "#a9b0ff",

        muted: { DEFAULT: "#e6edf4", fg: "#557091" },

        danger: {
          DEFAULT: "#F87171",
          subtle: "#FEE2E2",
        },

        success: {
          DEFAULT: "#34D399",
          subtle: "#D1FAE5",
        },

        warning: {
          DEFAULT: "#FBBF24",
          subtle: "#FEF3C7",
        },

        info: {
          DEFAULT: "#60A5FA",
          subtle: "#DBEAFE",
        },
      },

      borderRadius: {
        DEFAULT: "0.4rem", // now `rounded` uses your custom radius
      },
    },

    shortcuts: shortcuts(mergedOptions.shortcuts),
  };
});
