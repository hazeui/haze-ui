<script lang="ts">
  import "virtual:uno.css";
  import "../../shared/style.css";
  // import Btn from "haze-ui/button.svelte";
  // import Input from "haze-ui/input.svelte";

  import { Btn, Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  let val = $state();
  const setVal = (x: string) => (val = x);
</script>

<main class="m-10">
  <Tabs value={val} setValue={setVal} >
    <TabsList class="tabs">
      <Tab value="preview">Preview</Tab>
      <Tab value="code">Code</Tab>
    </TabsList>

    <TabsContent value="preview">
      <div class="p4 rounded brd mt9">
        some preview here
      </div>
    </TabsContent>

    <TabsContent value="code">
      <div class="p4 rounded brd mt9">
        some code here
      </div>
    </TabsContent>
  </Tabs>
</main>
