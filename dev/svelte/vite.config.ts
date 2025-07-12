import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "unocss/vite";
import path from "path"

const resolvePath = (dir) => path.resolve(__dirname, dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    UnoCSS({
      configFile: resolvePath("../../packages/preset/test-uno.config.ts"),
    }),
  ],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../../packages/svelte/src/lib/components/$1"),
      },
    ],
  },
});
