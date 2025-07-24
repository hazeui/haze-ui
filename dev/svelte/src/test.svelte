<script lang="ts">
  import type { Component } from "svelte";
  import Codepreview from "./preview.svelte";

  // Import just one specific file
  let codeModules = import.meta.glob("./btn.svelte", {
    eager: true,
    query: "raw",
    import: "default",
  }) as Record<string, string>;

  let componentModules = import.meta.glob("./btn.svelte", {
    eager: true,
    import: "default",
  }) as Record<string, Component>;

  // Extract the single file's data
  let sourceCode = codeModules["./btn.svelte"];
  let AppComponent = componentModules["./btn.svelte"];
</script>

<Codepreview code={sourceCode} showCode={false}>
  <svelte:component this={AppComponent} />
</Codepreview>
