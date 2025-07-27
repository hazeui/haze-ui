<script lang="ts">
  let { data } = $props();
</script>

{#if data.page}
  <data.page />
{:else}
  <div>Not Found</div>
{/if}
