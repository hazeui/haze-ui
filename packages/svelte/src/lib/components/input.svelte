<script lang="ts">
  console.log('input');

  export let txt: string;
  export let placeholder: string;
</script>

<div>
  <label>{txt}</label>
  <input
    class="bg-red p4 rounded-full"
    placeholder={placeholder}
  />
</div>
