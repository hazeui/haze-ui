<script lang="ts">
  import "virtual:uno.css";
  import Btn from "haze-ui/button.svelte";
  import Input from "haze-ui/input.svelte";
  import { createToast } from "./toast";
</script>

<main>
    <Btn txt="Submit" class='bg-red' onclick={createToast} />

</main>
