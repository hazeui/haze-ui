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
      <div className="flex gap3 items-center">
        <span className="badge-sm bg-pink">Badge</span>
        <span className="badge-secondary">Secondary</span>
        <span className="badge-outline-lg">Outline</span>
        <span className="badge-surface-xl">Surface</span>
      </div>
      <br />

      <div className="flex gap3 items-center">
          <span className="badge dtxtbg-emerald-40-brd">
          <i className="i-icon-park-outline:check-one"></i>
          Badge
        </span>
        <span className="badge bg-pink">
          <i className="i-line-md:star-filled"></i>
          Badge
        </span>
        <span className="badge-secondary dtxtbg-pink-10-brd">Secondary</span>
        <span className="badge-outline ltxtbg-pink-5-brd">Outline</span>
        <span className="badge-surface ltxtbg-orange.3-20-brd">Surface</span>
      </div>

      <br />

      <div className="">clean and cool</div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
