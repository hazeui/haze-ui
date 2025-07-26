<script lang="ts">
  import type { Component } from "svelte";
  import Codepreview from "./preview.svelte";

  let code = import.meta.glob("/src/**/*.svelte", {
    eager: true,
    query: "raw",
    import: "default",
  }) as Record<string, string>;

  let components = import.meta.glob("/src/**/*.svelte", {
    eager: true,
    import: "default",
  }) as Record<string, Component>;
</script>

<Codepreview code={code["/src/app.svelte"]} showCode={false}>
  {@const Component = components["/src/app.svelte"]}
  <Component>Test</Component>
</Codepreview>

<Codepreview code={code["/src/preview.svelte"]} showCode={true}>
  {@const Component = components["/src/preview.svelte"]}
  <Component>Test</Component>
</Codepreview>
