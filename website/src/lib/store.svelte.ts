let mobsidebar = $state(false);

export const mobasidebar = {
  get value() {
    return mobsidebar;
  },

  close: () => (mobsidebar = false),
  toggle: () => (mobsidebar = !mobsidebar),
};
