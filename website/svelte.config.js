import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".mdx"] })],
  kit: {
    adapter: adapter(),
    alias: {
      "@haze-ui/svelte": "../packages/svelte/src/index",
      "content/*": "./content/*",
      "codemos/*": "./codemos/*",
    },
  },
  extensions: [".svelte", ".mdx"],
};

export default config;
