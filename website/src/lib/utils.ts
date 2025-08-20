export const reactStrRep = (str: string) => {
  return str
    .replaceAll(">class", ">className")
    .replaceAll("/solid", "/react")
    .replaceAll('"solid"', '"react"')
    .replaceAll("createSignal", "useState");
};

export const solidStrRep = (str: string) => {
  return str
    .replaceAll("/react", "/solid")
    .replaceAll('"react"', '"solid"')
    .replaceAll("className", "class")
    .replaceAll("useState", "createSignal");
};

export const codestr = (node: any) => {
  const clone = node.cloneNode(node);
  clone.querySelectorAll(".LineNr").forEach((x:any) => x.remove());
  return clone.textContent;
};
