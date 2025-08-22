<script setup lang="ts">
import { ref } from "vue";

import { Btn , Input} from "@haze-ui/vue";


const txtt = ref('fetching....')

setTimeout(() => {
  txtt.value = 'fetched'
},1000)

// import Btn from "../../../packages/vue/src/button.vue"
</script>

<template>
  <Input :disabled="true" placeholder="hi" class='grinput-outline'  />
  <br/>
  <br/>
  <div class="flex items-center">
    <Btn txt="hi :)" class="btn-primary" />

    <Btn
      :loading='true'
      :loaderTxt="txtt"
      disabled="true"
      txt="Fetch data"
    />

    <Btn
      iconL="i-tabler:plus"
      class="btn-primary-eqmd"
      aria-label="plus button"
    />
  </div>
</template>
