<script lang="ts">
  import { Input } from "@haze-ui/svelte";

  let inputPasswdType = $state("password");

  const togglepasswdType = () => {
    inputPasswdType = inputPasswdType === "text" ? "password" : "text";
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("passwd");

    alert(`\nEmail: ${email}\nPassword: ${password}`);
  };
</script>

<form class="grid gap3" onsubmit={handleSubmit}>
  <label for="email" class="reqstar">Email</label>

  <Input
    required
    name="email"
    id="email"
    placeholder="Enter email"
    type="email"
    iconL="i-line-md:email"
    class="grinput-outline mb3"
  />

  <label for="passwd">Password</label>

  <Input
    name="passwd"
    id="passwd"
    placeholder="Enter Password"
    type={inputPasswdType}
    iconL="i-lucide:key-round"
    class="grinput-outline"
  >
    {#snippet iconR()}
      <button
        type="button"
        class="btn-ghost-eqsm rounded-full mr--2"
        aria-label="Toggle password visibility"
        onclick={togglepasswdType}
      >
        <i
          class={inputPasswdType == "text"
          ? "i-heroicons-solid:eye"
          : "i-heroicons-solid:eye-off"}
        ></i>
      </button>
    {/snippet}
  </Input>

  <input type="submit" class="!btn-primary ml-auto mt3">
</form>
