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

      {val}

      <br />
      <br />

      <Tabs >
        <TabsList className="tabs">
          <Tab value="preview">Preview</Tab>
          <Tab value="code">Code</Tab>
        </TabsList>


        <TabsContent value="preview">
          <div className="p4 rounded brd mt9">
            some preview here
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="p4 rounded brd mt9">
            some code here
          </div>
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
