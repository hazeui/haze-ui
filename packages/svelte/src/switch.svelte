<script lang="ts">
  import { SwitchProps } from "types/switch";
  import type { HTMLInputAttributes } from "svelte/elements";
  type Props = SwitchProps & HTMLInputAttributes;

  let { class: css, knobcss, ...restProps } = $props() as Props;
</script>

<label class={css || "switch"}>
  <input type="checkbox" class="peer" {...restProps} />
  <span class={knobcss || "swdot"}></span>
</label>
