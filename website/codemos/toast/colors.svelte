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

<button
  class="btn-outline text-indigo"
  onclick={() => newToast("toast-flat-indigo")}
>
  Indigo
</button>

<button class="btn-outline text-sky" onclick={() => newToast("toast-flat-sky")}>
  Sky
</button>

<button
  class="btn-outline text-danger"
  onclick={() => newToast("toast-flat-danger")}
>
  Danger
</button>

<button
  class="btn-outline text-success"
  onclick={() => newToast("toast-flat-success")}
>
  Success
</button>

<button
  class="btn-outline text-warning"
  onclick={() => newToast("toast-flat-warning")}
>
  Warning
</button>

<hr class="brd w-full my2" />

<button
  class="btn-outline text-indigo"
  onclick={() => newToast("toast-outline-indigo")}
>
  Indigo
</button>

<button
  class="btn-outline text-sky"
  onclick={() => newToast("toast-outline-sky")}
>
  Sky
</button>

<button
  class="btn-outline text-danger"
  onclick={() => newToast("toast-outline-danger")}
>
  Danger
</button>

<button
  class="btn-outline text-success"
  onclick={() => newToast("toast-outline-success")}
>
  Success
</button>

<button
  class="btn-outline text-warning"
  onclick={() => newToast("toast-outline-warning")}
>
  Warning
</button>
