import { defineConfig, presetMini, presetIcons, } from "unocss";
import hazeuiPreset from "./index";

export default defineConfig({
  presets: [presetIcons(),  presetMini(), hazeuiPreset()],

  shortcuts: {
    bruh: "m10 p10 bg-amber",
    kekw: "bg-blue2 p10",
  },

  // ...UnoCSS options
});
