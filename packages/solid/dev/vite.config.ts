import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import UnoCSS from "unocss/vite";

const resolvePath = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  root: path.resolve(__dirname), // 👈 this is the key
  plugins: [
    UnoCSS({ configFile: resolvePath("../../preset/test-uno.config.ts") }),
    solid(),
  ],

  resolve: {
    alias: [
      {
        find: /^haze-ui\/(.*)$/,
        replacement: resolvePath("../components/$1"),
      },
    ],
  },
});
