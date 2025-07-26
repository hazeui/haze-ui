export const load = async ({ params }) => {

  try {
    const page = (
      await import(`../../../../content/docs/${params.slug}.mdx`)
    ).default;
    return { page };
  } catch {}
};
