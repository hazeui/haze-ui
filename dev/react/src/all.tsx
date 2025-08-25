import { useState } from "react";

const components = import.meta.glob("../../../website/codemos/**/*.jsx", {
  import: "default",
  eager: true,
});

const parentDir = "../../../website/codemos/";
let result: any = {};

for (const [path, Comp] of Object.entries(components)) {
  const k = path.replace(parentDir, "");
  const bb = k.split("/");
  const section = bb[0];
  result[section] = result[section] || {};
  result[section][bb[1]] = Comp;
}

export default () => {
  const [active, setActive] = useState("btn");

  return (
    <main className="m10">
      <aside className="flex gap3">
        {Object.keys(result).map((section) => (
          <button
            className={` capitalize ${active == section ? "btn-primary" : "btn"}`}
            onClick={() => setActive(section)}
          >
            {section}
          </button>
        ))}
      </aside>

      <section className="grid gap5 my10">
        {Object.entries(result[active]).map(([path, Comp]) => (
          <div className="grid gap3">
            <h3 className="capitalize">{path.split(".")[0]}</h3>

            <div className="demobox justify-start !p5">
              <Comp key={path} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
