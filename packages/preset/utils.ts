export const deepMergeObj = (target: any, source: any) => {
  if (typeof target !== "object" || typeof source !== "object") return source;

  const output = structuredClone(target);

  for (const key in source) {
    if (source[key] && typeof source[key] === "object") {
      output[key] = deepMergeObj(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }

  return output;
};
