import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [sveltekit(), Unocss()],
  server: {
    watch: {
      usePolling: true,
    },

    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "./content/",
      ],
    },
  },
});
