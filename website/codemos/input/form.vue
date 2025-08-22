<script setup>
import { ref } from "vue";
import { Input } from "@haze-ui/vue";

const inputPasswdType = ref("password");

const togglePasswdType = () => {
  inputPasswdType.value = inputPasswdType.value === "text"
    ? "password"
    : "text";
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("passwd");

  alert(`\nEmail: ${email}\nPassword: ${password}`);
};
</script>

<template>
  <form class="grid gap3" @submit="handleSubmit">
    <label for="email" class="reqstar">Email</label>

    <Input
      required
      name="email"
      id="email"
      placeholder="Enter email"
      type="email"
      iconL="i-line-md:email"
    />

    <label for="passwd">Password</label>

    <Input
      name="passwd"
      id="passwd"
      placeholder="Enter Password"
      :type="inputPasswdType"
      iconL="i-lucide:key-round"
      class="grinput-outline"
    >
      <template #iconR>
        <button
          type="button"
          class="btn-ghost-eqsm rounded-full mr--2"
          aria-label="Toggle password visibility"
          @click="togglePasswdType"
        >
          <i
            :class='
              inputPasswdType === "text"
                ? "i-heroicons-solid:eye"
                : "i-heroicons-solid:eye-off"
            '
          />
        </button>
      </template>
    </Input>

    <input type="submit" class="!btn-primary ml-auto mt3" />
  </form>
</template>
