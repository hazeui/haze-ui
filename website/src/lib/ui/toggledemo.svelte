<script lang="ts">
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  let codeblockref: any;
  const opts = $props();
  let { demo, class: css = "" } = opts;

  console.log(demo);

  let strTransformed = {
    react: false,
    solid: false,
  };

  let active = $state<string | null>(null);

  const react = (str: string) => {
    return str.replaceAll(">class", ">className");
  };

  const solid = (str: string) => {
    return str.replaceAll("react", "solid");
  };

  const setActive = (x: string) => {
    active = x;

    setTimeout(() => {
      if (x == "react" && !strTransformed.react) {
        codeblockref.innerHTML = react(codeblockref.innerHTML);
        strTransformed.react = true;
      } //
      else if (x == "solid" && !strTransformed.solid) {
        codeblockref.innerHTML = solid(codeblockref.innerHTML);
        strTransformed.solid = true;
      }
    });
  };

  const Component = demo.preview;
</script>

<Tabs defaultValue="preview">
  <TabsList class="tabs w-fit p1 children:(!p2 !px3)">
    <Tab value="preview">
      <i class="i-mage:preview-fill"></i> Preview
    </Tab>
    <Tab value="code">
      <i class="i-majesticons:code"></i> Code
    </Tab>
  </TabsList>

  <TabsContent value="preview">
    <div class={css.includes("demobox") ? css : `demobox-center ${css}`}>
      <Component />
    </div>
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
          <Tab value="svelte"><i class="i-devicon:svelte"></i> Svelte</Tab>
          <Tab value="react"><i class="i-devicon:react"></i> React</Tab>
          <Tab value="solid"><i class="i-devicon:solidjs"></i> Solid</Tab>
        {/if}
      </TabsList>

      {#if active}
        <div
          class="bg-[#1b1f27] text-white pt5 rounded-b"
        >
          {#await demo.code[active]()}
            <div class="skeleton h-50"></div>
          {:then Codecomp}
            <div bind:this={codeblockref}>
              <Codecomp />
            </div>
          {/await}
        </div>
      {/if}
    </Tabs>
  </TabsContent>
</Tabs>
