/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:uno.css";
import "../shared.css";
import Button from "haze-ui/button";
import Select from "haze-ui/select";

function App() {
  const fruitOptions = [
    { val: "apple", name: "Apple" },
    { val: "banana", name: "Banana" },
    { val: "mango", name: "Mango" },
    { val: "peach", name: "Peach" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <main className="gid gap4 items-center p5">
      <div className="m-30">
        <Select
          options={fruitOptions}
          onChange={handleSelectChange}
          activeOptionCss="!bg-gray-200"
          dropdownCss="bg-bg"
        />
      </div>
    </main>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
