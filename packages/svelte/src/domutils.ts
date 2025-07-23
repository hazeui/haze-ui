export const clickOutside = (node, callback) => {
  function handleClick(event) {
    if (!node.contains(event.target)) {
      callback();
    }
  }

  document.addEventListener("click", handleClick);

  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    },
  };
};
