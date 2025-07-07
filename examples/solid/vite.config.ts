import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [UnoCSS(), solid()],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: path.resolve(
          __dirname,
          "../../packages/solid/components/$1",
        ),
      },
    ],
  },
});
