import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";
import Input from "haze-ui/input";
import ReactDOM from "react-dom";

import Dialog from "haze-ui/dialog";
import { createToast, Toast } from "./toas";

function App() {
  return (
    <main className="grid gap4 items-center p5 [&_*]:w-fit">
      <Button
        txt="Top right"
        className="bg-blue"
        onClick={() =>
          createToast({
            pos: "topright",
            title: "Event has been created",
            txt: "Sunday, December 03, 2023 at 9:00 AM",
            type: "success",
          })
        }
      />

      <Button
        txt="Top left"
        className="bg-blue"
        onClick={() =>
          createToast({
            pos: "topleft",
            title: "Event has been created",
            txt: "Sunday, December 03, 2023 at 9:00 AM",
            type: "success",
          })
        }
      />

      <Button
        txt="Top middle"
        className="bg-blue"
        onClick={() =>
          createToast({
            pos: "topmid",
            title: "Event has been created",
            txt: "Sunday, December 03, 2023 at 9:00 AM",
            type: "success",
          })
        }
      />

      
      <Button
        txt="bot middle"
        className="bg-blue"
        onClick={() =>
          createToast({
            pos: "botleft",
            title: "Event has been created",
            txt: "Sunday, December 03, 2023 at 9:00 AM",
            type: "success",
          })
        }
      />

      <h1>hi</h1>
      <h1>hi</h1>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
