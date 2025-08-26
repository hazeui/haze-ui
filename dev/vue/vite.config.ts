import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";

const resolvePath = (dir) => path.resolve(__dirname, dir);

import UnocssConfig from "../../packages/preset/test-uno.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(UnocssConfig)],

  resolve: {
    alias: [
      {
        find: "@haze-ui/vue",
        replacement: resolvePath("../../packages/vue/index.ts"),
      },
    ],
  },
});
