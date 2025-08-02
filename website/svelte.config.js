import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".mdx"] })],
  kit: {
    adapter: adapter({
      base: process.argv.includes("dev") ? "" : "/haze-ui",
    }),
    alias: {
      "@haze-ui/svelte": "../packages/svelte/src/index",
      "content/*": "./content/*",
      "codemos/*": "./codemos/*",
      "codemocomps/*": "./codemocomps/*",
      "css/*": "./src/css/*",
    },
  },
  extensions: [".svelte", ".mdx"],
};

export default config;
