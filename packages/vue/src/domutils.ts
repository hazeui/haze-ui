export const vClickOutside = {
  mounted(el: HTMLElement, binding) {
    el.clickOutside = (e: MouseEvent) => {
      if (!el.contains(e.target)) binding.value();
    };

    document.body.addEventListener("click", el.clickOutside);
  },
  unmounted(el: HTMLElement) {
    document.body.removeEventListener("click", el.clickOutside);
  },
};
