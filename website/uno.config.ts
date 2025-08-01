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
      mutedfg: "var(--mutedfg)",
      mutedbg: "var(--mutedbg)",
      success: "var(--success)",
      warning: "var(--warning)",
      danger: "var(--danger)",
    },
  },

  shortcuts: [
    [
      /^demobox(?:-([\w]+))?(?:-([\w]+))?$/,
      ([, a = "", b = ""]) => {
        const parts = [a, b];
        const pad = parts.find((x) => /^\d+$/.test(x)) || "10";
        const start = parts.includes("start");

        return `flex-(~ gap3 wrap) items-center brd ${
          start ? "justify-start" : "justify-center"
        } p${pad} rounded`;
      },
    ],
  ],
});
