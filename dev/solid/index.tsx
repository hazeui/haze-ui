/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:uno.css";
import "../shared.css";
import Button from "haze-ui/button";

const createToast = () => {
  let div = document.getElementById("toasts");
  if (!div) {
    div = document.createElement("div");
    div.id = "toasts";
    div.className = "absolute bg-red grid gap3 top-3 right-3";
    document.body.appendChild(div);
  }
  render(() => <Button variant="soft" txt="works" />, div);
};

function App() {
  return (
    <>
      <div className="bg-red "> 

        <div> bruh</div>

      </div>
      <Button txt="Submit" onClick={createToast} />
    </>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
