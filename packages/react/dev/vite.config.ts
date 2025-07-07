import path from "path";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

const resolvePath = (dir) => path.resolve(__dirname, dir);

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname), // 👈 this is the key
  plugins: [
    react(),
    UnoCSS({ configFile: resolvePath("../../preset/test-uno.config.ts") }),
  ],

  // plugins: [react(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../components/$1"),
      },
    ],
  },
});
