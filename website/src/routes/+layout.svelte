<script lang="ts">
  import "virtual:uno.css";
  import "@unocss/reset/tailwind.css";
  import "css/vars.css";
  import "css/style.css";

  import Navbar from "$lib/ui/navbar.svelte";

  let { children } = $props();
</script>

<Navbar />
{@render children()}
