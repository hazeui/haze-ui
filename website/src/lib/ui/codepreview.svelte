<script lang="ts">
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";
</script>

<Tabs>
  <TabsList class='!bg-red'>
    <Tab value="preview">Preview</Tab>
    <Tab value="code">Code</Tab>
  </TabsList>

  <TabsContent value="preview">
    <div class="p5">
      hi
    </div>
  </TabsContent>

  <TabsContent value="code">
    <pre class="p5 rounded bg-secondary">
      pree
    </pre>
  </TabsContent>
</Tabs>
