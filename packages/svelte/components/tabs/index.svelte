<script lang="ts" module>
  export interface CtxProps {
    active: () => string;
    tabLabels: () => string[];
    setActive: (x: string) => void;
    addTabLabel: (x: string[]) => void;
  }
</script>

<script lang="ts">
  import { setContext } from "svelte";
  let { children, defaultValue } = $props();

  let active = $state(defaultValue);
  let tabLabels: string[] = $state([]);

  setContext("tabs", {
    active: () => active,
    tabLabels: () => tabLabels,
    setActive: (x: boolean) => active = x,
    addTabLabel: (x: string) => tabLabels.push(x),
  });
</script>

{@render children()}
