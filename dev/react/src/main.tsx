import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import All from "./all";
import { Select } from "@haze-ui/react";

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

      <div className="grid gap3 grid-cols-2 w-1/2">
        <Select options={options} triggerProps={{ className: "btn-primary" }} />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
