const options = {
  shortcuts: {
    btn: {
      variant: "soft",
      sizes: {
        xs: ["text-xs", 1],
        sm: ["text-sm", 1.5],
        md: ["text-base", 2],
        lg: ["text-lg", 2.5],
        xl: ["text-xl", 3],
      },
    },

    checkbox: {
      variant: "primary",
      sizes: { sm: 4, md: 6, lg: 8, xl: 10 },
    },

    input: {
      variant: "solid",
      sizes: {
        sm: ["text-sm", 1.5],
        md: ["text-base", 2],
        lg: ["text-lg", 2.5],
        xl: ["text-xl", 3],
      },
    },

    popover: {
      pos: {
        top: "bottom-full mb3",
        bottom: "top-full mt3",
      },
    },

    switch: {
      variant: "flat",
      color: "primary",
      sizes: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
    },

    radio: {
      color: "primary",
      sizes: { sm: 3, md: 4, lg: 6, xl: 8 },
    },

    badge: {
      variant: "solid",
      sizes: {
        sm: ["text-xs", 0.5],
        md: ["text-sm", 1],
        lg: ["text-base", 1.2],
        xl: ["text-lg", 1.2],
      },
    },
  },
};

export default options;
