<script lang="ts">
  let { children } = $props();
  import Sidebar from "$lib/ui/sidebar.svelte";
  import Onthispage from "$lib/ui/onthispage.svelte";

  import "css/codesyn.css"
  import "css/docs.css"
</script>

<div class="grid lg:grid-(~ cols-[auto_1fr_auto])">
  <Sidebar />
  <div class="flex-(~ col gap5) p8 [&_p]:text-mutedfg overflow-hidden" id="docs">
    {@render children()}
  </div>
  <Onthispage />
</div>
