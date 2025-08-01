import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import { toast } from "@haze-ui/react";

function App() {
  const [val, setVal] = useState();

  useEffect(() => {
    toast({
      title: "hello world",
      txt: "some long para over here",
      css:"toast-flat-success"
    });
  }, []);

  return (
    <main className="gid gap4 items-center p5 m-auto">
      <button className="btn"> create toast</button>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
