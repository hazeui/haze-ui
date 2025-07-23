<script lang='ts'>
	import { getContext } from "svelte"
  import type { CtxProps } from "./index.svelte";

  let { children, value} = $props()

	const { active, setActive } = getContext("tabs") as CtxProps

	// sets default tab cuz as there's no index stuff!
	 if(!active()) setActive(value)
</script>

{#if active() == value}
	<div role="tabpanel" aria-labelledby={`tab-${active()}`}>
   {@render children()}
	</div>
{/if}
