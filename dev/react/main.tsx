import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";

function App() {
  return (
    <>
      <div className="fex gap3">
        <Button
          txt="Submit"
          variant="outline"
          isLoading={true}
          loaderTxt="Kekw"
          className='size-sm'
        />
        <Button txt="Submit" variant="alt" />
        <Button txt="Submit" variant="outline" />
        <Button txt="Submit" variant="primary" />
      </div>

      <p className="kekw">Click on the Vite and React logos to learn more</p>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
