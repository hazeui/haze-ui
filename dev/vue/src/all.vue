<script setup lang="ts">
import { ref } from "vue";

const components = import.meta.glob("../../../website/codemos/**/*.vue", {
  import: "default",
  eager: true,
});

const parentDir = "../../../website/codemos/";
const result: Record<string, Record<string, any>> = {};

for (const [path, Comp] of Object.entries(components)) {
  const k = path.replace(parentDir, "");
  const bb = k.split("/");
  const section = bb[0];
  result[section] = result[section] || {};
  result[section][bb[1]] = Comp;
}

const active = ref("input");

const sidebarLinks = Object.keys(result)
</script>

<template>
  <main class="m10">
    <aside class="flex gap3">
      <button
        v-for="section in sidebarLinks"
        :key="section"
        class="capitalize"
        :class='active === section ? "btn-primary" : "btn"'
        @click="active = section"
      >
        {{ section }}
      </button>
    </aside>

    <section class="grid gap5 my10">
      <div
        v-for="([path, Comp]) in Object.entries(result[active])"
        :key="path"
        class="grid gap3"
      >
        <h3 class="capitalize">{{ path.split(".")[0] }}</h3>

        <div class="demobox justify-start !p5">
          <component :is="Comp" />
        </div>
      </div>
    </section>
  </main>
</template>
