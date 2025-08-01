<script >
  import { toast } from "@haze-ui/svelte";

  const createToast = () => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
    });
  };
</script>

<button class="btn" onclick={createToast}>
  Show toast
</button>
