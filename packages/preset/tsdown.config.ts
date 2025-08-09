import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"],
  dts: true,
  // splitting: false,
  minify: true,
  clean: true,
  external: ["unocss"],
});
