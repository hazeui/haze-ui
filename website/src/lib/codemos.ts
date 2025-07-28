const allPreviews = import.meta.glob("/codemos/**/*.svelte", {
  import: "default",
  eager: true
});

const allCodes = import.meta.glob("/codemos/**/*", {
  eager: true,
  query: "raw",
  import: "default",
});

export const getDemo = (component: string, filename: string) => {
  const basePath = `/codemos/${component}/${filename}`;

  return {
    preview: allPreviews[`${basePath}.svelte`],
    code: {
      svelte: allCodes[`${basePath}.svelte`],
      react: allCodes[`${basePath}.jsx`],
      // solid: allCodes[`${basePath}.jsx`],
    },
  };
};

export const getDemoHtml = (component: string, filename: string) => {
  const basePath = `/codemos/${component}/${filename}`;

  return {
    preview: allPreviews[`${basePath}.svelte`],
    code: {
      html: allCodes[`${basePath}.svelte`],
    },
  };
};
