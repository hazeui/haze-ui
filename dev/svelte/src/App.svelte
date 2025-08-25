<script lang="ts">
  import "virtual:uno.css";
  import "../../shared/style.css";
  // import Btn from "haze-ui/button.svelte";
  import { Select } from "@haze-ui/svelte";

  const options = [
    { name: "one", value: "one" },
    { name: "two", value: "two" },
    { name: "three", value: "three" },
  ];

</script>

<main class="m-10">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="grid gap3 grid-cols-2 w-1/2">
    <Select triggerProps={{ class: "btn-primary" }} {options} />
  </div>
</main>
