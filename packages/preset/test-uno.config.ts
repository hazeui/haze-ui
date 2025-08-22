import { defineConfig, presetWind3, presetIcons, presetWind4, transformerDirectives } from "unocss";
import hazeuiPreset from "./index";

export default defineConfig({
  presets: [presetIcons({ scale: 1.2 }), presetWind3(), hazeuiPreset()],
  transformers: [transformerDirectives()],

  shortcuts: [
    [
      /^demobox(?:-([\w]+))?(?:-([\w]+))?$/,
      ([, a = "", b = ""]) => {
        const parts = [a, b];
        const pad = parts.find((x) => /^\d+$/.test(x)) || "10";
        const start = parts.includes("start");

        return `animate-(fade-in duration-300)  flex-(~ gap3 wrap) items-center brd ${
          start ? "justify-start" : "justify-center"
        } p${pad} rounded`;
      },
    ],
  ],

  // ...UnoCSS options
});
