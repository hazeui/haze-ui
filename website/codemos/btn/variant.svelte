<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
</script>

<div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
