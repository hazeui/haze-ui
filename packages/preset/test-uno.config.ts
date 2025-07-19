import { defineConfig, presetWind3, presetIcons, presetWind4 } from "unocss";
import hazeuiPreset from "./index";

export default defineConfig({
  presets: [presetIcons({scale:1.2}), presetWind3(), hazeuiPreset()],

  shortcuts: {
    kekw: "bg-blue2 p10",
  },

  // ...UnoCSS options
});
