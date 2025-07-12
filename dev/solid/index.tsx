/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:uno.css";
import "../shared.css";
import Button from "haze-ui/button";

function App() {
  return (
    <>
      <Button
        txt="Submit"
        variant="alt"
        isLoading={true}
        loaderTxt="Kekw"
      />
      <Button txt="Submit" variant="alt" />
      <Button txt="Submit" variant="outline" />
      <Button txt="Submit" />

      <p class="kekw">Click on the Vite and Solid logos to learn more</p>
    </>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
