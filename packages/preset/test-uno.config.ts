import { defineConfig, presetMini, presetIcons, } from "unocss";
import hazeuiPreset from "./index";

export default defineConfig({
  presets: [presetIcons(),  presetMini(), hazeuiPreset()],

  shortcuts: {
    kekw: "bg-blue2 p10",
  },

  // ...UnoCSS options
});
