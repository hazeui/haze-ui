import { definePreset, Preset } from "unocss";

export default definePreset((options) => {
  return {
    name: "haze-ui",
    rules: [
      // ...
    ],
    variants: [
      // ...
    ],

    shortcuts: {
      btn: "py-2 px-4 font-semibold rounded-lg shadow-md bg-pink",
      big: "m10 p10 bg-indigo"
    },
  };
});
