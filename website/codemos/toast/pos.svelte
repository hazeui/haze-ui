<script lang="ts">
  import { toast } from "@haze-ui/svelte";

  const newToast = (position: any) => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
      pos: position,
    });
  };
</script>

<button class="btn" onclick={() => newToast("topleft")}>
  Top left
</button>

<button class="btn" onclick={() => newToast("topmid")}>
  Top center
</button>

<button class="btn" onclick={() => newToast("topright")}>
  Top right
</button>

<button class="btn" onclick={() => newToast("botleft")}>
  Bottom left
</button>

<button class="btn" onclick={() => newToast("botmid")}>
  Bottom center
</button>

<button class="btn" onclick={() => newToast("botright")}>
  Bottom right
</button>
