import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
// import "@unocss/reset/tailwind.css";
import { Btn, Tabs, Tab, TabsContent, TabsList } from "@haze-ui/react";

function App() {
  const [val, setVal] = useState();

  return (
    <main className="gid gap4 items-center p5">
      <Btn txt="hi" className="btn-outline bg-red" />

      <br />
      <br />
      <br />

      <div className="grid gap3 [&>div]:(grid grid-cols-[.3fr_1fr] items-center)">
        <div>
          <input type="checkbox" className="switch-knob" />
          <span>hii</span>
        </div>
        <div>
          <input type="checkbox" className="switch-knob" />
          <span>hii</span>
        </div>
        <div>
          <input type="checkbox" className="switch-knob" />
          <span>hii</span>
        </div>
      </div>
      <br />
      <br />

      <Tabs value={val} setValue={setVal}>
        <TabsList className="tabs">
          <Tab value="preview">Preview</Tab>
          <Tab value="code">Code</Tab>
        </TabsList>

        <TabsContent value="preview">
          <div className="p4 rounded brd mt9">some preview here</div>
        </TabsContent>

        <TabsContent value="code">
          <div className="p4 rounded brd mt9">some code here</div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
