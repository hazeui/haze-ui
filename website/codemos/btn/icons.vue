<script setup>
import { Btn } from "@haze-ui/vue";
</script>

<template>
  <Btn
    class="btn-emerald500 text-white"
    iconL="i-line-md:email-filled"
    txt="Email"
  />

  <Btn
    class="btn-outline"
    iconL="i-iconamoon:send"
    txt="Send us"
  />

  <Btn
    :loading="true"
    loaderTxt="Fetching..."
    :disabled="true"
    txt="Fetch data"
  />

  <Btn
    class="btn-primary-eqmd"
    iconL="i-tabler:plus"
    aria-label="plus button"
  />

  <Btn
    class="btn-outline-eqmd rounded-full"
    iconL="i-iconoir:user"
    aria-label="user button"
  />
</template>
