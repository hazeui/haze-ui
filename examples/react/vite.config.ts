import path from "path";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: path.resolve(
          __dirname,
          "../../packages/react/components/$1",
        ),
      },
    ],
  },
});
