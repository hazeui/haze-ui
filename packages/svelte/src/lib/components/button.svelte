<!-- Button.svelte -->
<script lang="ts">

  const { txt, iconL } = $props<{
    txt: string;
    iconL?: string;
  }>();

  let n = $state(0);

  const increaseN = () => {
    n+=1
  };
</script>

<button onclick={increaseN} class="btn">
  {#if iconL}
    <div class={iconL}></div>
  {/if}
  {txt}
  {n}
</button>
