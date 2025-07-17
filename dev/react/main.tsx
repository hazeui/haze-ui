import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared.css";
import "virtual:uno.css";
import Button from "haze-ui/button";
// import '@unocss/reset/tailwind.css'

function App() {
  const checkSvg =
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg fill='white' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M6.173 12.252l-3.97-3.97 1.414-1.414L6.173 9.424l6.364-6.364 1.414 1.414z'/></svg>`,
    );

  return (
    <main className="gid gap4 items-center p5">
      <Button txt="Top right" className="bg-blue" />

      <input
        type="checkbox"
      />

      <br />
      <br />

      <div className="relative inline-flex items-center w-6 h-6">
        <input type="checkbox" className="peer sr-only" />
        <div className="i-proicons:checkbox-unchecked wh-6 peer-checked:(i-proicons:checkbox-checked wh-6)"></div>
      </div>

      <div>
        <input type="checkbox" className="checkbox" checked={true} />
        <input type="checkbox" className="checkbox" />
      </div>

      <div>
        <input type="radio" />
      </div>


      <div className="flex gap2 items-center">
        <input name='options' type="radio" id="option1" className="radio border-fg checked:(border-blue)" />
        <input name='options' type="radio" id="option1" className="radio-4" />
        <input name='options' type="radio" id="option1" className="radio-5" />
        <label htmlFor="option1" className="mr2">Male</label>
        <input name='options' type="radio" id="option2" className="radio" />
        <label htmlFor="option2">Female</label>
      </div>

    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
