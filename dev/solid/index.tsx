/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:uno.css";
import "../shared.css";
import Button from "haze-ui/button";
import Input from "haze-ui/input";

function App() {
  return (
    <>
      <Button
        txt="Submit"
        isLoading={true}
        loaderTxt="Kekw"
      />
      <Button txt="Submit" variant="soft" />
      <Button txt="Submit" variant="outline" />
      <Button txt="Submit" />

      
      <Input
        iconL="i-line-md:email-filled"
        placeholder="Enter email here"
      />

      <br />
      <input type="text" placeholder="enter email" className="input-solid" />
    </>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
