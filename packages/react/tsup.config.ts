import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "index.ts",
    tabs: "components/tabs.tsx",
    dropdown: "components/dropdown.tsx",
    toast: "components/toast.tsx",
    // etc for each component
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  minify: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions: (options) => {
    options.jsx = "preserve";
  },
});
