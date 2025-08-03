<script lang="ts">
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  const tabStyles = ["tabs-box", "tabs-classic", "tabs-outline", "tabs-line", "tabs-subtle"];
</script>

{#each tabStyles as tabStyle}
  <div class="grid gap3">
    <Tabs>
      <TabsList class={tabStyle}>
        <Tab value="account"><i class="i-line-md:account"></i> Account</Tab>
        <Tab value="settings"><i class="i-mynaui:cog-two"></i> Settings</Tab>
        <Tab value="Network"><i class="i-eos-icons:network"> </i>Network</Tab>
      </TabsList>

      <div class="rounded bg-input p10 shadow-md brd flex justify-center">
        <TabsContent value="account">
          Account content
        </TabsContent>
        <TabsContent value="settings">
          Settings content
        </TabsContent>
        <TabsContent value="Network">
          Network content
        </TabsContent>
      </div>
    </Tabs>
  </div>
{/each}
