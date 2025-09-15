<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
</script>

<Btn
  class="btn-emerald500 text-white"
  iconL="i-line-md:email-filled"
  txt="Email"
/>
<Btn iconL="i-iconamoon:send" txt="Send us" class="btn-outline" />

<Btn
  loading={true}
  loaderTxt="Fetching..."
  disabled={true}
  txt="Fetch data"
/>

<Btn
  iconL="i-tabler:plus"
  class="btn-primary-eqmd"
  aria-label="plus button"
/>

<Btn
  iconL="i-iconoir:user"
  class="btn-outline-eqmd rounded-full"
  aria-label="user button"
/>
