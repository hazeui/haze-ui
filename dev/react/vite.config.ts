import path from "path";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

import UnocssConfig from "../../packages/preset/test-uno.config.ts";

const resolvePath = (dir) => path.resolve(__dirname, dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(UnocssConfig)],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../../packages/react/components/$1"),
      },
    ],
  },
});
