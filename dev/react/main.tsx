import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";
import Input from "haze-ui/input";

import UserPic from "./userpic";

function App() {
  return (
    <main className="grid gap4 items-center p5 [&_*]:w-fit">
      <Button txt="Top right" className="bg-blue" />


      

      <UserPic
        src="https://avatars.githubusercontent.com/u/59060246"
        alt="image"
      />
      <UserPic
        alt="image"
      />

      <div className="bg-blue wh-10">hii</div>
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
