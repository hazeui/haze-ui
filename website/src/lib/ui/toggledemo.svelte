<script lang="ts">
  import type { Component } from "svelte";
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  const opts = $props();
  let { preview, react, sve, solid, html } = opts;

  if (!solid && react) {
    solid = react.replaceAll("react", "solid");
  }

  if (react) {
    react = react.replaceAll("class=", "className=");
  }

  let active = $state();
  const setActive = (x: string) => active = x;

  const codeTabs = [
    { name: "svelte", propv: "sve", icon: "i-devicon:svelte" },
    { name: "react", icon: "i-devicon:react" },
    { name: "solid", icon: "i-devicon:solidjs" },
  ];
</script>

<Tabs>
  <TabsList class="tabs w-fit p1 children:(!p2 !px3)">
    <Tab value="preview"><i class="i-mage:preview-fill"></i> Preview</Tab>
    <Tab value="code"><i class="i-majesticons:code"></i> Code</Tab>
  </TabsList>

  <TabsContent value="preview">
    {@const Component = preview}
    <Component />
  </TabsContent>

  <TabsContent value="code">
    <Tabs value={active} setValue={setActive}>
      <TabsList class="tabs-line-primary brd rounded-t [&>button]:capitalize">
        {#if html}
          <Tab value="html">
            <i class="i-devicon:html5"></i>
            file.html
          </Tab>
        {:else}
          <Tab value="svelte"><i class="i-devicon:svelte"></i>Svelte</Tab>
          <Tab value="react"><i class="i-devicon:react"></i>React</Tab>
          <Tab value="solid"><i class="i-devicon:solidjs"></i>Solid</Tab>
        {/if}
      </TabsList>

      <pre
        class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"
      >
 {#if active=='react'}{react}{:else if active=='solid'}{solid}{:else if active=='html'}{html}{:else if active=='svelte'}{sve}{/if}</pre>
    </Tabs>
  </TabsContent>
</Tabs>
