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

      <input type="checkbox" className=" mr-2" id="working" />
      <label htmlFor="working">Click me</label>

      <br/>
      <br/>

      <input type="checkbox" className="checkbox mr-2" id="working" />
      <label htmlFor="working">Click me</label>

      <br />
      <br />

      <div className="flex items-center">
        <input type="checkbox" className="checkbox-md" defaultChecked />
        <input type="checkbox" className="checkbox-red-lg" checked />
        <input type="checkbox" className="checkbox-3" checked />
        <input type="checkbox" className="checkbox-4" checked />
        <input type="checkbox" className="checkbox-5" checked />
        <input type="checkbox" className="checkbox-blue-md" checked />
        <input
          type="checkbox"
          className="checkbox-blue-5 checked:after:i-fluent-mdl2:skype-check"
          checked
        />
      </div>

      <input type="checkbox" class="checkbox-md-primary" id="working" />
      <label for="working" class="cursor-pointer">
        Click me
      </label>

      <br />
      <br />

      <Tabs>
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
