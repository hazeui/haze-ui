import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
// import "@unocss/reset/tailwind.css";
import { Btn, Tabs, Tab, TabsContent, TabsList, Select } from "@haze-ui/react";

const options = [
  { value: "1", name: "Option 1" },
  { value: "2", name: "Option 2" },
  { value: "3", name: "Option 3" },
  { value: "4", name: "Option 4" },
  { value: "5", name: "Option 5 keyboad hehe" },
];

function App() {
  const [val, setVal] = useState();

  return (
    <main className="gid gap4 items-center p5 m-auto">
      <div className="flex gap3">
        <span className="badge-solid">Badge</span>
        <span className="badge-secondary">Secondary</span>
        <span className="badge-outline">Outline</span>
        <span className="badge-surface">Surface</span>
      </div>

      <br />
      <br />

      <div className="p3 bg-[color-mix(in_srgb,theme(colors.secondary),black_5%)]">
        Violet-ish background
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
