/* @refresh reload */
import { render } from "solid-js/web";

// @ts-ignore
import "virtual:uno.css";
// @ts-ignore
import "../../shared/style.css";

import { Userpic} from "../../../packages/solid/index";

function App() {
  return (
    <main class="gid gap4 items-center p5">
      <Userpic name="joe" />
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
