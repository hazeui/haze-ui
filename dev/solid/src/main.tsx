/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal, createEffect, onMount } from "solid-js";
import "@unocss/reset/tailwind.css";

// @ts-ignore
import "virtual:uno.css";
// @ts-ignore
import "../../shared/style.css";

// import { Userpic, Btn} from "../../../packages/solid/index";
import { Select } from "@haze-ui/solid";

function App() {
  const options = [
    { name: "one", value: "one" },
    { name: "two", value: "two" },
    { name: "three", value: "three" },
  ];
  const [val, setVal] = createSignal();

  return (
    <main class="gid gap4 items-center p5">
      <input class="input-outline" />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="grid gap3 grid-cols-2 w-1/2">
        <Select
          triggerProps={{ class: "btn-primary justify-between", txt: "Select brooo" }}
          options={options}
        />
      </div>
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
