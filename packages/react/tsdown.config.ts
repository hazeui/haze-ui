import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "index.ts",
  },
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react", "react-dom", "unocss"],
});
