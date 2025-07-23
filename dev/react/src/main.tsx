import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../../shared/style.css";
import "virtual:uno.css";
// import "@unocss/reset/tailwind.css";
import Switch from "haze-ui/switch";

function App() {
  return (
    <main className="gid gap4 items-center p5">
      <Switch className="switch-flat-lg" knobcss="swdot-flat-lg" />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
