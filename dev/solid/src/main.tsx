/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:uno.css";
import "../../shared/style.css";
import Button from "haze-ui/button";

function App() {

  return (
    <main className="gid gap4 items-center p5">
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
