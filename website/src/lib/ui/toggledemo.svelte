<script lang="ts">
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  import { codestr, reactStrRep, solidStrRep } from "$lib/utils";

  let codeblockref: any = $state();
  const opts = $props();

  let { demo, class: css = "" } = opts;

  let active = $state<string | null>(null);

  const setActive = (x: string) => {
    // Replace code strings on react/solid respectively
    if (x == "react" && active != "react") {
      codeblockref.innerHTML = reactStrRep(codeblockref.innerHTML);
    } //
    else if (x == "solid" && active != "solid") {
      codeblockref.innerHTML = solidStrRep(codeblockref.innerHTML);
    }

    active = x;
  };

  const Component = demo.preview;

  let codecopied = $state(false);

  const copyCodeToClipboard = () => {
    const code = codestr(codeblockref.textContent);
    navigator.clipboard.writeText(code);
    codecopied = true;

    setTimeout(() => {
      codecopied = false;
    }, 1000);
  };
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
      <TabsList
        class="tabs-line-primary brd border-b-0 rounded-t [&>button]:capitalize"
      >
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

        <button
          class="!rounded-full m-(l-auto ) hover:text-primary"
          onclick={copyCodeToClipboard}
          aria-label="Copy to clipboard"
        >
          <i
            class={codecopied
            ? "i-line-md:confirm"
            : "i-majesticons:clipboard-line"}
          ></i>
        </button>
      </TabsList>

      <div class="codeblock">
        {#if active && demo.code[active]}
          {@const Component2 = demo.code[active]}
          <Component2 bind:ref={codeblockref} />
        {/if}
      </div>
    </Tabs>
  </TabsContent>
</Tabs>
