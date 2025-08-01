/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal, createEffect, onMount } from "solid-js";

// @ts-ignore
import "virtual:uno.css";
// @ts-ignore
import "../../shared/style.css";

// import { Userpic, Btn} from "../../../packages/solid/index";
import { Btn, Tabs, Tab, TabsContent, TabsList, toast } from "@haze-ui/solid";
import "@unocss/reset/tailwind.css";

function App() {
  const [val, setVal] = createSignal();

  toast({ title: "hello world", txt: "some long para over here", css:'toast-outline-warning' });

  return (
    <main class="gid gap4 items-center p5">
      <input class="input-outline" />
      <Btn txt="hello" class="btn-blue" />
      <br />
      <br />

      <Tabs setValue={setVal} value={val}>
        <TabsList class="tabs-outline">
          <Tab value="preview">Preview</Tab>
          <Tab value="code">Code</Tab>
        </TabsList>

        <div class="p4 rounded brd mt9">
          {val() == "preview" && <div>some preview here</div>}
          {val() == "code" && <div>some code here</div>}
        </div>
      </Tabs>
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
