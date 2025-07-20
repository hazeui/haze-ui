import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";
import "@unocss/reset/tailwind.css";

import Select from "./select";

function App() {
  const fruitOptions = [
    { val: "apple", name: "Apple" },
    { val: "banana", name: "Banana" },
    { val: "mango", name: "Mango" },
    { val: "peach", name: "Peach" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <main className="gid gap4 items-center p5">
      <div className="m-30">
        <Select
          options={fruitOptions}
          onChange={handleSelectChange}
          activeOptionCss="!bg-gray-200"
          dropdownCss="bg-bg"
        />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
