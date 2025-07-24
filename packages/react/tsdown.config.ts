import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "index.ts",
    preset: "../../packages/preset/index.ts",
    // etc for each component
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  minify: true,
  clean: true,
  external: ["react", "react-dom", "unocss"],
  esbuildOptions: (options) => {
    options.jsx = "preserve";
  },
});
