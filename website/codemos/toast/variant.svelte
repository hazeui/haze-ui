<script>
  import { toast } from "@haze-ui/svelte";

  const newToast = (css) => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
      css: css,
    });
  };
</script>

<button class="btn-primary" onclick={() => newToast("toast-solid")}>
  Solid
</button>

<button class="btn" onclick={() => newToast("toast-flat")}>
  Flat
</button>

<button class="btn-outline" onclick={() => newToast("toast-outline")}>
  Outline
</button>
