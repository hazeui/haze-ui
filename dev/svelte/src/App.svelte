<script lang="ts">
  import "virtual:uno.css";
  // import Btn from "haze-ui/button.svelte";
  // import Input from "haze-ui/input.svelte";

  import Select from "./select.svelte";

</script>

<main class="m-10">

  <Select
    options={[
      { val: "apple", name: "Apple" },
      { val: "banana", name: "Banana" },
      { val: "mango", name: "Mango" },
      { val: "peach", name: "Peach" },
    ]}
    onChange={(val) => console.log("Selected:", val)}
  />
 
</main>
