import { defineConfig, presetMini } from "unocss";
import hazeuiPreset from "./index";

export default defineConfig({
  presets: [presetMini, hazeuiPreset()],

  shortcuts: {
    bruh: "m10 p10 bg-amber",
    kekw: "bg-blue2 p10"
  },

  // ...UnoCSS options
});
