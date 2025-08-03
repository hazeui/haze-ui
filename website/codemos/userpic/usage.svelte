<script lang="ts">
  import { Userpic } from "@haze-ui/svelte";

  const url =
    "https://www.oola.com/wp-content/uploads/2022/07/communityIcon_x4lqmqzu1hi81.jpeg?w=520";
</script>

<Userpic name="sid" class="wh-10" />

<Userpic
  src="https://avatars.githubusercontent.com/u/59060246?v=4"
  class="wh-10"
  alt="pic"
/>

<Userpic src={url} class="wh-15" alt="pic" />
<Userpic src={url} class="wh-20" alt="pic" />

<hr class="w-full brd" />

<Userpic
  src={url}
  class="wh-15 brd-2-transparent outline-(2 solid primary)"
  alt="pic"
/>

<Userpic
  src={url}
  class="wh-15 brd-2-transparent outline-(2 solid danger)"
  alt="pic"
/>

<Userpic
  src={url}
  class="wh-15 brd-3-transparent outline-(2 dotted primary)"
  alt="pic"
/>

<Userpic
  src={url}
  class="wh-15 brd-7-transparent outline-(2 dotted primary)"
  alt="pic"
/>
