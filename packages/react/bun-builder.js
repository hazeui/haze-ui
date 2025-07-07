// EXPERIMENTAL! Since i wont be compiling tsx and just preserving jsx
// I wont be needing this
import { Glob } from "bun";

const glob = new Glob("*");
const files = [];

for (const file of glob.scanSync("./components/")) {
  const filepath = "./components/" + file;
  files.push(filepath);
}

await Bun.build({
  entrypoints: files,
  outdir: "./dist",
  external: ["react", "react-dom", "unocss"], // default: []
});

// for (const file of glob.scanSync("./dist/")) {
//     const filepath = "./dist/" + file;
//     const content = await Bun.file(filepath).text();
//     const newContent = "//@unocss-include \n" + content;
//     await Bun.write(filepath, newContent);
// }
