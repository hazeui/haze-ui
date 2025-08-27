<script setup lang="ts">
import { ref } from "vue";

import All from "./all.vue";
// import { Input, Tab, Tabs, TabsContent, TabsList } from "@haze-ui/vue";

const path = window.location.pathname;

// import Btn from "../../../packages/vue/src/button.vue"
</script>

<template>
  <a v-if='path == "/"' class="btn" href="/all">go to /all</a>
  <All v-if='path == "/all"' />
</template>
