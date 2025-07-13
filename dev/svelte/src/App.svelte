<script lang="ts">
  import "virtual:uno.css";
  import Btn from "haze-ui/button.svelte";
  import Input from "haze-ui/input.svelte";
</script>

<main>
  <div class="flex gap3">
    <Btn
      txt="Submit"
      isLoading={true}
      loaderTxt="Kekw"
    />
    <Btn txt="Submit" variant="alt" />
    <Btn txt="Submit" variant="outline" />
    <Btn txt="Submit" variant="primary" />

    <Input placeholder="Enter email here">
      {#snippet iconL()}
        <div class="i-line-md:email-filled"></div>
      {/snippet}
    </Input>

    <br />
    <input type="text" placeholder="enter email" class="input" />
  </div>
</main>
