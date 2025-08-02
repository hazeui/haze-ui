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
