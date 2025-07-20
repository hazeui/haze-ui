const  encodeSVG = (svg: string) => {
  return `data:image/svg+xml,${encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22")}`;
}

export const checkIconUrl = () => {
  const checkIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 12l4.243 4.243l8.484-8.486' class='!fill-blue-2' /></svg>`;

  return `bg-[url("${encodeSVG(checkIcon)}")]`;
};
