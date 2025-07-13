import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "unocss/vite";
import path from "path";

import UnocssConfig from "../../packages/preset/test-uno.config.ts";

const resolvePath = (dir) => path.resolve(__dirname, dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), UnoCSS(UnocssConfig)],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../../packages/svelte/src/lib/components/$1"),
      },
    ],
  },
});
