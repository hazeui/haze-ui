import {
  defineConfig,
  presetWind3,
  presetIcons,
  transformerDirectives,
} from "unocss";
import hazeuiPreset from "../packages/preset";

export default defineConfig({
  presets: [presetIcons({ scale: 1.2 }), presetWind3(), hazeuiPreset()],

  transformers: [transformerDirectives()],

  theme: {
    colors: {
      fg: "var(--fg)",
      bg: "var(--bg)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      inactivefg: "var(--inactivefg)",
    },
  },

  // ...UnoCSS options
});
