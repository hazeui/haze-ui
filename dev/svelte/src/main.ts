import { mount } from "svelte";

import "virtual:uno.css";

import "../../shared/style.css";
import App from "./App.svelte";
import "@unocss/reset/tailwind.css";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
