import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    UnoCSS({ configFile: "./../preset/test-uno.config.ts" }),
  ],
  build: {
    rollupOptions: { external: ["unocss"] },
  },
});
