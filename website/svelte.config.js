import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".mdx"] })],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".mdx"],
};

export default config;
