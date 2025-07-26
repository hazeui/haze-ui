<script lang="ts">
  import type { Component } from "svelte";
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  let { preview, react, sve, solid } = $props();

  if (!solid) {
    solid = react.replaceAll("react", "solid");
  }

  react = react.replaceAll("class=", "className=");

  let active = $state();
  const setActive = (x: string) => active = x;
</script>

<Tabs>
  <TabsList class="tabs w-fit p1 children:(!p2 !px4)">
    <Tab value="preview"><i class="i-mage:preview-fill"></i> Preview</Tab>
    <Tab value="code"><i class="i-majesticons:code"></i> Code</Tab>
  </TabsList>

  <TabsContent value="preview">
    {@const Component = preview}
    <Component />
  </TabsContent>

  <TabsContent value="code">
    <Tabs value={active} setValue={setActive}>
      <TabsList class="tabs-line-primary brd rounded-t">
        <Tab value="svelte">
          <i class="i-vscode-icons:file-type-svelte"></i>
          Svelte</Tab>
        <Tab value="react">
          <i class="i-devicon:react"></i>

          React</Tab>
        <Tab value="solid">
          <i class="i-devicon:solidjs"></i>
          Solid</Tab>
      </TabsList>

      <pre
        class="p5 rounded brd rounded-t-0"
      >
 {#if active=='react'}{react}{:else if active=='solid'}{solid}{:else if active=='svelte'}{sve}{/if}</pre>
    </Tabs>
  </TabsContent>
</Tabs>
