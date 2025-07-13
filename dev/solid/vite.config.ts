import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import UnoCSS from "unocss/vite";

const resolvePath = (dir) => path.resolve(__dirname, dir);

import UnocssConfig from "../../packages/preset/test-uno.config.ts";

export default defineConfig({
  plugins: [UnoCSS(UnocssConfig), solid()],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../../packages/solid/components/$1"),
      },
    ],
  },
});
