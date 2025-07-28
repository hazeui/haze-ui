<script lang="ts">
  import { Dialog } from "@haze-ui/svelte";

  let open = $state(false);
  const setClose = () => open = false;
  const setOpen = () => open = true;
</script>

<div class="flex-(~ gap3 wrap) items-center brd p10 rounded">
  <button class="btn-primary mx-auto" onclick={setOpen}>
    Open
  </button>

  <Dialog {open} close={setClose} class="grid gap4">
    <h3>Edit Account</h3>
    <p class="text-mutedfg mb2">Make changes to your user profile here.</p>

    <label for="name">Name</label>
    <input class="input-outline" id="name" placeholder="Enter your name" />

    <label for="email">Email</label>
    <input
      type="email"
      class="input-outline"
      id="email"
      placeholder="Enter your email"
    />

    <div class="flex gap3 items-center ml-auto mt3">
      <button class="btn-soft" onclick={setClose}>Cancel</button>
      <button class="btn-primary">Save</button>
    </div>
  </Dialog>
</div>
