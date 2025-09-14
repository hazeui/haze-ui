<script setup lang="ts">
import { ref } from "vue";

import All from "./all.vue";
import {
  Select,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@haze-ui/vue";

const path = window.location.pathname;

const options3: any = [
  { value: "arch", name: "Arch Linux ", iconL: "i-logos:archlinux" },
  { value: "ubuntu", name: "Ubuntu", iconL: "i-logos:ubuntu" },
  { value: "fedora", name: "Fedora", iconL: "i-logos:fedora" },
  { value: "manjaro", name: "Manjaro", iconL: "i-logos:manjaro" },
  { value: "artix", name: "Artix ", iconL: "i-devicon:artixlinux" },
];

// import Btn from "../../../packages/vue/src/button.vue"
</script>

<template>
  <a v-if='path == "/"' class="btn" href="/all">go to /all</a>
  <All v-if='path == "/all"' />

  <br />
  <br />
  <div class="m20 h-screen">
    <Select
      :options="options3"
      placeholder="Select sdf sf sfd"
    />
    <br/>
    <br/>

    <Dropdown>
      <DropdownTrigger>Dropdown</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>one</DropdownItem>
        <DropdownItem>one</DropdownItem>
        <DropdownItem>one</DropdownItem>

        <Dropdown :nested="true">
          <DropdownTrigger class="justify-between btn-primary-eqmd">
            nested :) <i class="i-prime:caret-right" />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>one</DropdownItem>
            <DropdownItem>one</DropdownItem>
            <DropdownItem>one</DropdownItem>
          </DropdownContent>
        </Dropdown>

        <Dropdown :nested="true">
          <DropdownTrigger class="justify-between btn-ghost-eqmd">
            nested :) <i class="i-prime:caret-right" />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>one</DropdownItem>
            <DropdownItem>one</DropdownItem>
            <DropdownItem>one</DropdownItem>
            lol
          </DropdownContent>
        </Dropdown>
      </DropdownContent>
    </Dropdown>
  </div>
</template>
