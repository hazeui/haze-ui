<script setup>
import { ref } from "vue";
import { Dialog } from "@haze-ui/vue";

const open = ref(false);
const openDialog = () => (open.value = true);
const closeDialog = () => (open.value = false);
</script>

<template>
  <button class="btn-primary mx-auto" @click="openDialog">
    Open
  </button>

  <Dialog :open="open" :close="closeDialog" class="grid gap4">
    <h3>Edit Account</h3>

    <p class="text-muted-fg mb2">
      Make changes to your user profile here.
    </p>

    <label for="name">Name</label>
    <input
      class="input-outline"
      id="name"
      placeholder="Enter your name"
    />

    <label for="email">Email</label>
    <input
      type="email"
      class="input-outline"
      id="email"
      placeholder="Enter your email"
    />

    <div class="flex gap3 items-center ml-auto mt3">
      <button class="btn-soft" @click="closeDialog">
        Cancel
      </button>
      <button class="btn-primary">Save</button>
    </div>
  </Dialog>
</template>
