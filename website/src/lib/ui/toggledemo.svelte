<script lang="ts">
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";
  const opts = $props();
  let { demo } = opts;

  let codeContent: any = $state({
    svelte: "",
    react: "",
    solid: "",
    html: "",
  });

  let active = $state<string | null>(null); // or "" if you prefer

  const setActive = async (x: string) => {
    active = x;
    if (x === "svelte" && !codeContent.svelte && demo.code.svelte) {
      codeContent.svelte = await demo.code.svelte();
    } //

    else if (x === "react" && !codeContent.react && demo.code.react) {
      const reactCode = await demo.code.react();
      codeContent.react = reactCode.replaceAll("class=", "className=");
      // gen solid version
      if (!codeContent.solid && !demo.code.solid) {
        codeContent.solid = reactCode.replaceAll("react", "solid");
      }
    } //

    else if (x === "solid" && !codeContent.solid && demo.code.solid) {
      codeContent.solid = await demo.code.solid();
    } //

    else if (x === "html" && !codeContent.html && demo.code.html) {
      codeContent.html = await demo.code.html();
    }
  };
</script>

<Tabs>
  <TabsList class="tabs w-fit p1 children:(!p2 !px3)">
    <Tab value="preview"><i class="i-mage:preview-fill"></i> Preview</Tab>
    <Tab value="code"><i class="i-majesticons:code"></i> Code</Tab>
  </TabsList>

  <TabsContent value="preview">
    {#await demo.preview() then Component}
      <Component />
    {/await}
  </TabsContent>

  <TabsContent value="code">
    <Tabs value={active} setValue={setActive}>
      <TabsList class="tabs-line-primary brd rounded-t [&>button]:capitalize">
        {#if demo.code.html}
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
      ><code>{active ? codeContent[active] : ''}</code></pre>
    </Tabs>
  </TabsContent>
</Tabs>
