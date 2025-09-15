/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal, createEffect, onMount } from "solid-js";

import {
  Select,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@haze-ui/solid";

// @ts-ignore
import "virtual:uno.css";
// @ts-ignore
import "../../shared/style.css";

// import { Userpic, Btn} from "../../../packages/solid/index";

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
          triggerProps={{
            class: "btn-primary justify-between",
            txt: "Select brooo",
          }}
          options={options}
        />
      </div>

      <Dropdown>
        <DropdownTrigger>Dropdown</DropdownTrigger>
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem key={index}>{option.name}</DropdownItem>
          ))}

          <Dropdown nested={true}>
            <DropdownTrigger class="justify-between btn-primary-eqmd">
              nested chad :) <i class="i-prime:caret-right" />
            </DropdownTrigger>
            <DropdownContent>
              {options.map((option, index) => (
                <DropdownItem key={index}>{option.name}</DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>

          <Dropdown nested={true}>
            <DropdownTrigger class="justify-between btn-ghost-eqmd">
              nested chad :) <i class="i-prime:caret-right" />
            </DropdownTrigger>
            <DropdownContent>
              {options.map((option, index) => (
                <DropdownItem key={index}>{option.name}</DropdownItem>
              ))}
              lol
            </DropdownContent>
          </Dropdown>
        </DropdownContent>
      </Dropdown>
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
