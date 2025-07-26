import {
  defineConfig,
  presetWind3,
  presetIcons,
  // presetTypography,
  transformerDirectives,
} from "unocss";
import hazeuiPreset from "../packages/preset";

export default defineConfig({
  presets: [
    presetIcons({ scale: 1.2 }),
    presetWind3(),
    // presetTypography(),
    hazeuiPreset(),
  ],

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
      success: "var(--success)",
      warning: "var(--warning)",
      danger: "var(--danger)",

      coal: {
        1: "#0c0c0c",
        2: "#1d1d1d",
        3: "#2d2d2d",
        4: "#3d3d3d",
        DEFAULT: "#4d4d4d",

      }
    },
  },

  // ...UnoCSS options
});
