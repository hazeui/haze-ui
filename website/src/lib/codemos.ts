const allPreviews = import.meta.glob("/codemos/**/*.svelte", {
  import: "default",
  eager: true
});

const allCodes = import.meta.glob("/codemocomps/**/*.svelte", {
  import: "default",
  eager: true,
});

export const getDemo = (component: string, filename: string) => {
  const basePath = `/codemos/${component}/${filename}`;
  const basePath2 = `/codemocomps/${component}/${filename}`;

  return {
    preview: allPreviews[`${basePath}.svelte`],
    code: {
      svelte: allCodes[`${basePath2}.svelte`],
      react: allCodes[`${basePath2}-jsx.svelte`],
      solid: allCodes[`${basePath2}-jsx.svelte`],
      vue: allCodes[`${basePath2}-vue.svelte`],
    },
  };
};

export const getDemoHtml = (component: string, filename: string) => {
  const basePath = `/codemos/${component}/${filename}`;
  const basePath2 = `/codemocomps/${component}/${filename}`;

  return {
    preview: allPreviews[`${basePath}.svelte`],
    code: {
      html: allCodes[`${basePath2}.svelte`],
    },
  };
};
