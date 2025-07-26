import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [sveltekit(), Unocss()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
