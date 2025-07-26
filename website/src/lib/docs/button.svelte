<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
</script>

<h3>Variants</h3>

<p>
  Use the <u>variant</u> prop to change the appearance of the button.
</p>

<div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft brd-2" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>

<h3>Classes</h3>

<p>
  Add classes to change the appearance of the button.
</p>

<div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>

<h3>Sizes</h3>

<p>
  Add the btn-variant-size class to change the size of the button. example:
  btn-primary-sm
</p>

<div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>

<h3>Icons</h3>

<p>
  Use the iconL and iconR prop
</p>

<div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
  <Btn
    class="bg-emerald5 text-white ripple-primary"
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
</div>
