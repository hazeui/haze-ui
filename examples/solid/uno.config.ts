import { defineConfig, presetMini } from "unocss";
import hazeuiPreset from "../../packages/preset/";

export default defineConfig({
  presets: [presetMini, hazeuiPreset()],
  // ...UnoCSS options
});
