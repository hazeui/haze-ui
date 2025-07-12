<script lang="ts">
  import "virtual:uno.css";
  import Btn from "haze-ui/button.svelte";
</script>

<main>
  <div class="lex gap3">
    <Btn
      txt="Submit"
      variant="primary"
      isLoading={true}
      loaderTxt="Kekw"
    />
    <Btn txt="Submit" variant="alt" />
    <Btn txt="Submit" variant="outline" />
    <Btn txt="Submit" variant="primary" />
  </div>
</main>
