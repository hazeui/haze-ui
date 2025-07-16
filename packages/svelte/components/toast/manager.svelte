<script lang="ts">
  import { data } from "./utils.svelte";
  import Card from "./card.svelte";
  let { pos } = $props();
</script>

{#each data[pos] as prop (prop.id)}
  <Card {...prop} />
{/each}
