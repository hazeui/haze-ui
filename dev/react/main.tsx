import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";
import Input from "haze-ui/input";

function App() {
  return (
    <main className="grid p5">
      <div className="flex gap3 mb5">
        <Button
          txt="Submit"
          variant="outline"
          isLoading={true}
          loaderTxt="Kekw"
          className="size-sm"
        />
        <Button txt="Submit" variant="soft" />
        <Button txt="Submit" variant="outline" />
        <Button txt="Submit" variant="primary" />
      </div>

      <Input
        iconL="i-line-md:email-filled"
        placeholder="Enter email here"
      />

      <br />
      <input type="text" placeholder="enter email" className="input-solid" />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
