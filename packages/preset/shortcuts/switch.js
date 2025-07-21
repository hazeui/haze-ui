const round1 = (num) => Math.round(num * 10) / 10;

const base = "inline-flex items-center [&>input]:sr-only hover:cursor-pointer rounded-full";

const sizes = {
  xs: 4.5,
  sm: 5.25,
  md: 6,
  lg: 6.75,
};

export default [
  [
    /^switch(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
    ([, variant = "flat", size = "md", color = "primary"]) => {
      if (Number.isNaN(Number(size))) size = sizes[size];

      const w = size * 2;
      const h = size;

      const variants = {
        flat: `bg-border has-[>input:checked]:bg-${color}`,
        outline: `bg-bg border-(2 solid border) has-[>input:checked]:border-${color}`,
        minimal: `bg-border has-[>input:checked]:bg-inactivefg h3`,
      };

      return `${base} w${w} h${h} ${variants[variant]}`;
    },
  ],

  [
    /^swdot(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
    ([, variant = "flat", size = "md", color = "primary"]) => {
      const numval = Number(size);
      size = Number.isNaN(numval) ? sizes[size] : numval;

      const dotRatio = variant == "minimal" ? 0.5 : 0.7;
      const dotSize = round1(size * dotRatio);
      const pad = round1((size - dotSize) / 2);
      const checkedTranslate = round1(size + pad); 

      const variants = {
        flat: "bg-bg shadow",
        outline: `bg-border peer-checked:bg-${color}`,
        minimal: `bg-bg ring-(7 solid input) peer-checked:(bg-bg ring-${color})`,
      };

      return `w-${dotSize} h-${dotSize} rounded-full transition-transform 
            translate-x-${pad} peer-checked:translate-x-${checkedTranslate} ${variants[variant]}`;
    },
  ],
];
