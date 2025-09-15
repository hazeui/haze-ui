import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import All from "./all";
import { Select } from "@haze-ui/react";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@haze-ui/react";

function App() {
  const path = window.location.pathname;

  if (path === "/all") return <All />;

  const options = [
    { name: "one", value: "one" },
    { name: "two", value: "two" },
    { name: "three", value: "three" },
  ];

  return (
    <main className="m10 min-h-[100rem]">
      <a className="btn" href="/all">
        {" "}
        go to /all
      </a>

      <Dropdown>
        <DropdownTrigger>Dropdown</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>one</DropdownItem>
          <DropdownItem>one</DropdownItem>
          <DropdownItem>one</DropdownItem>

          <Dropdown nested>
            <DropdownTrigger className="justify-between btn-primary-eqmd">
              nested :) <i className="i-prime:caret-right" />
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>one</DropdownItem>
              <DropdownItem>one</DropdownItem>
              <DropdownItem>one</DropdownItem>
            </DropdownContent>
          </Dropdown>

          <Dropdown nested>
            <DropdownTrigger className="justify-between btn-ghost-eqmd">
              nested :) <i className="i-prime:caret-right" />
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>one</DropdownItem>
              <DropdownItem>one</DropdownItem>
              <DropdownItem>one</DropdownItem>
              lol
              <Dropdown nested>
                <DropdownTrigger className="justify-between btn-ghost-eqmd">
                  broooooo <i className="i-prime:caret-right" />
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownItem>one</DropdownItem>
                  <DropdownItem>one</DropdownItem>
                  <DropdownItem>one</DropdownItem>
                  lol
                </DropdownContent>
              </Dropdown>
            </DropdownContent>
          </Dropdown>
        </DropdownContent>
      </Dropdown>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
