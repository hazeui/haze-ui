import { definePreset, Preset } from "unocss";

const btnVariants = {
  primary: "bg-primary text-white",
  alt: "bg-slate2 text-fg",
  outline: "bg-bg text-fg border-border border-2 border-solid",
  ghost: "bg-bg",
};

const btnSizes = {
  sm: "text-sm px3 py1.5",
  md: "text-base px4 py2", // default
  lg: "text-lg px5 py2.5",
  xl: "text-xl px6 py3",
};

export default definePreset((options): Preset<object> => {
  return {
    name: "haze-ui",
    rules: [
      // ...
    ],
    variants: [
      // ...
    ],

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

    shortcuts: [
      {
        btn: `rounded inline-flex items-center justify-center border-0
              gap2 cursor-pointer transition-colors duration-200`,
      },

      [
        /^btn-(.*)$/,
        ([, x]) => {
          const [variant, size] = x.split("-");

          return (
            "btn " +
            (btnVariants[variant as keyof typeof btnVariants] || btnVariants.primary) +
            " " +
            (btnSizes[size as keyof typeof btnSizes] || btnSizes.md)
          );
        },
      ],
    ],
  };
});
