<script lang="ts" module>
  import type { TabsProps } from "types/tabs";

  export interface CtxProps {
    value: () => string;
    tabLabels: () => string[];
    setValue: (x: string) => void;
    addTabLabel: (x: string[]) => void;
  }
</script>

<script lang="ts">
  import { setContext } from "svelte";
  let { children, defaultValue, value, setValue }: TabsProps = $props();

  let active = $state(defaultValue);
  let tabLabels: string[] = $state([]);

  const setActive = (x: string) => active = x;

  setContext("tabs", {
    value: () => value ?? active,
    setValue: setValue ?? setActive,
    tabLabels: () => tabLabels,
    addTabLabel: (x: string) => tabLabels.push(x),
  });
</script>

{@render children()}
