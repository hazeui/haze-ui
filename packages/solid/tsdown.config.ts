import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "index.ts",
    preset: "../../packages/preset/index.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  minify: true,
  clean: true,
  external: ["solid-js", "unocss"],
  esbuildOptions: (options) => {
    options.jsx = "preserve";
  },
});
