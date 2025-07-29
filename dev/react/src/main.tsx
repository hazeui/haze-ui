import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "../../shared/style.css";
// @ts-ignore
import "virtual:uno.css";
// import "@unocss/reset/tailwind.css";
import { Btn, Tabs, Tab, TabsContent, TabsList, Select } from "@haze-ui/react";

const options = [
  { value: "1", name: "Option 1" },
  { value: "2", name: "Option 2" },
  { value: "3", name: "Option 3" },
  { value: "4", name: "Option 4" },
  { value: "5", name: "Option 5 keyboad hehe" },
];

function App() {
  const [val, setVal] = useState();

  return (
    <main className="gid gap4 items-center p5">
      <Btn txt="hi" className="btn-outline bg-red" />

      <br />
      <br />
      <br />

      <Select options={options}/>

      <input type="checkbox" className="switch-line" />
      <input type="checkbox" className="switch" />
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
