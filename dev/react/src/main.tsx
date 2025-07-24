import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
// import "@unocss/reset/tailwind.css";
import { Btn } from "../../../packages/react/index";
// import Btn from "../../../packages/react/src/button";
// import Input from "../../../packages/react/src/input";
// import Switch from "../../../packages/react/src/switch";

function App() {
  return (
    <main className="gid gap4 items-center p5">
      <Btn txt="hi" />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
