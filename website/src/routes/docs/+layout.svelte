<script lang="ts">
  let { children } = $props();
  import Sidebar from "$lib/ui/sidebar.svelte";
</script>

<div class="grid-(~ cols-[auto_1fr])">
  <Sidebar />
  <div class="flex-(~ col gap5) p8 [&_p]:text-inactivefg">
    {@render children()}
  </div>
</div>
