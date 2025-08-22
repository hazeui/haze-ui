import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import All from "./all";

function App() {
  const path = window.location.pathname;

  if (path === "/") return <All />;

  return (
    <main>
      <button> kekw</button>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
